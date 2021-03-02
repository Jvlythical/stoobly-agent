class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ReverseProxy::Controller

  def route
    start_time = Time.now
    service_url = get_service_url

    api = ScenariosApi.new(
      Settings.scenarios.url, Settings.scenarios.api_key
    )

    mode = Settings.mode.active
    case mode
    when MODE[:RECORD]
      # 
      # Try forwarding the request to the service specified by Settings.service_url
      #
      unless service_url
        raise 'config service_url is not set'
      end 

      disable_web_cache()

      options = get_options()

      reverse_proxy service_url, options do |config|
        config.on_response do |code, res|
          if Settings.mode.record.enabled && path_matches?(Settings.mode.record.match_patterns)
            upload_policy = get_record_policy
          else
            # If the request path does not match accepted paths, do not record
            upload_policy = RECORD_POLICY[:NONE]
          end

          case upload_policy
          when RECORD_POLICY[:ALL]
            upload_request(api, res) 
          when RECORD_POLICY[:NOT_FOUND]
            res = eval_request(api)

            upload_request(api, res) if res.code == CUSTOM_RESPONSE_CODES[:NOT_FOUND]
          when RECORD_POLICY[:NONE]
            # Do nothing
          else
            return bad_request(
              "Valid env RECORD_POLICY: %s, %s, %s, Got: %s" % 
              [RECORD_POLICY[:ALL], RECORD_POLICY[:NOT_FOUND], RECORD_POLICY[:NONE], upload_policy]
            )
          end
        end
      end
    when MODE[:MOCK]
      if Settings.mode.mock.enabled && path_matches?(Settings.mode.mock.match_patterns)
        mock_policy = get_mock_policy()
      else
        # If the request path does not match accepted paths, do not mock
        mock_policy = MOCK_POLICY[:NONE]
      end

      case mock_policy
      when MOCK_POLICY[:NONE]
        reverse_proxy service_url, get_options()
      when MOCK_POLICY[:ALL]
        res = eval_request(api)

        if res.code == CUSTOM_RESPONSE_CODES[:IGNORE_COMPONENTS]
          res = eval_request(api, res.body)
        end

        simulate_latency(res[CUSTOM_HEADERS[:RESPONSE_LATENCY]], start_time)

        return pass_on(res)
      when MOCK_POLICY[:FOUND]
        res = eval_request(api)

        if res.code == CUSTOM_RESPONSE_CODES[:NOT_FOUND]
          reverse_proxy service_url, get_options()
        else
          simulate_latency(res[CUSTOM_HEADERS[:RESPONSE_LATENCY]], start_time)

          return pass_on(res)
        end
      else
        return bad_request(
          "Valid env MOCK_POLICY: %s, %s, %s, Got: %s" % 
          [MOCK_POLICY[:ALL], MOCK_POLICY[:FOUND], MOCK_POLICY[:NONE], mock_policy]
        )
      end
    else
      return bad_request(
        "Valid env MODE: %s, %s, Got: %s" % [MODE[:PROXY], MODE[:MOCK], mode]
      )
    end
  end

  def bad_request(message)
    render plain: message, status: 400
  end

  private
  
  ###
  #
  # @param patterns [Array<string>]
  #
  def path_matches?(patterns)
    return true if patterns.nil?
    
    path = request.path
 
    patterns.each do |pattern|
      return true if path.match?(Regexp.new pattern)
    end
    
    patterns.length == 0
  end

  def eval_request(api, ignored_components_json = nil)
    ignored_components = []

    unless ignored_components_json.nil?
      begin
        ignored_components = JSON.parse ignored_components_json
      rescue JSON::ParserError
        # Do nothing
      end
    end

    query_params = build_query_params(ignored_components)
    api.request_response(
      Settings.scenarios.project_key, query_params
    )
  end

  ###
  #
  # Try to simulate expected response latency
  #
  # wait_time (seconds) = expected_latency - estimated_rtt_network_latency - api_latency
  #
  # expected_latency = provided value
  # estimated_rtt_network_latency = 15ms
  # api_latency = current_time - start_time of this request
  #
  def simulate_latency(expected_latency, start_time)
    return if expected_latency.nil?

    estimated_rtt_network_latency = 0.015 # seconds
    api_latency = (Time.now - start_time)
    expected_latency = expected_latency.to_f / 1000

    wait_time = expected_latency - estimated_rtt_network_latency - api_latency

    Rails.logger.debug "  Expected latency: #{expected_latency}"
    Rails.logger.debug "  API latency: #{api_latency}"
    Rails.logger.debug "  Wait time: #{wait_time}"

    sleep wait_time unless wait_time < 0

    wait_time
  end
  
  ###
  # 
  # Formats request into parameters expected by scenarios api
  #
  # @param ignored_components [Array<Hash>]
  #
  # @return [Hash] query parameters to pass to scenarios api
  #
  def build_query_params(ignored_components = [])
    hashed_request = begin
      HashedRequestDecorator.new(request).
        with_ignored_components(ignored_components)
    end

    query_params_hash = hashed_request.query_params_hash
    body_params_hash = hashed_request.body_params_hash
    body_text_hash = hashed_request.body_text_hash

    query_params = {}
    query_params[:path] = request.path
    query_params[:method] = request.method
    query_params[:query_params_hash] = query_params_hash unless query_params_hash.empty?
    query_params[:body_params_hash] = body_params_hash unless body_params_hash.empty?
    query_params[:body_text_hash] = body_text_hash unless body_text_hash.empty?
    query_params[:retry] = 1 unless ignored_components.empty?

    query_params
  end
  
  ###
  #
  # Formats response headers
  #
  def render_response_headers(res)
    headers = res.each_capitalized.to_h
    
    # Without deleting this header, causes caller to stall
    headers.delete 'Transfer-Encoding'

    headers.each do |key, value|
      response.set_header(key, value)
    end
  end
  
  ##
  #
  # Return response headers, body, and status code
  #
  def pass_on(res)
    render_response_headers res
    render plain: res.body, status: res.code
  end

  ###
  #
  # Upon receiving a response, create the request in API for future use
  #
  def upload_request(api, res)
    Thread.new {
      proxy_request = ProxyRequest.new(request, get_service_url)
      joined_request = JoinedRequest.new(proxy_request).with_response(res)

      joined_request_string = joined_request.build
      api.request_create(
        Settings.scenarios.project_key, joined_request_string, {
          importer: 'gor',
          scenario_key: Settings.scenarios.scenario_key,
        }
      )
    }
  end

  def disable_web_cache
    request.headers['CACHE-CONTROL'] = 'no-cache'
    request.headers['IF-NONE-MATCH'] = nil
  end

  def get_record_policy
    request.headers[CUSTOM_HEADERS[:RECORD_POLICY]] || Settings.mode.record.policy
  end

  def get_mock_policy
    request.headers[CUSTOM_HEADERS[:MOCK_POLICY]] || Settings.mode.mock.policy
  end

  def get_service_url
    request.headers[CUSTOM_HEADERS[:SERVICE_URL]] || Settings.mode.record.service_url
  end

  def get_options 
    {
      headers: { 
        'CONNECTION' => nil, # Disable setting connection, keep-alive is not supported
      }, 
      http: { open_timeout: 5 },
    }
  end
end
