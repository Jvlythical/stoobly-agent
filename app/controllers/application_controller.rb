class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ReverseProxy::Controller

  def route
    start_time = Time.now

    api = ScenariosApi.new(
      RecordConfigFile.instance.scenarios_url, RecordConfigFile.instance.scenarios_api_key
    )

    modes = RecordConfig.modes
    
    mode = RecordConfigFile.instance.mode
    case mode
    when modes[:mode_proxy]
      # 
      # Try forwarding the request to the service specified by RecordConfigFile.instance.service_url
      #
      service_url = get_service_url
      unless service_url
        raise 'config/env.yml service_url is not set'
      end 

      disable_web_cache()

      options = get_options()

      reverse_proxy service_url, options do |config|
        config.on_response do |code, res|
          upload_policy = get_upload_policy

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
    when modes[:mode_mock] 
      mock_policies = RecordConfig.mock_policies
      mock_policy = get_mock_policy()

      case mock_policy
      when mock_policies[:mock_none]
        reverse_proxy service_url, get_options()
      when mock_policies[:mock_any]
        res = eval_request(api)
        simulate_latency(res[CUSTOM_HEADERS[:RESPONSE_LATENCY]], start_time)

        return pass_on(res)
      when mock_policies[:mock_found]
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

  private

  def bad_request(message)
    render plain: message, status: 400
  end

  def eval_request(api)
    query_params = build_query_params
    api.request_response(
      RecordConfigFile.instance.scenarios_project_key, query_params
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
  # @return [Hash] query parameters to pass to scenarios api
  #
  def build_query_params
    hashed_request = HashedRequestDecorator.new(request)

    query_param_name_hash = hashed_request.query_param_name_hash
    query_param_value_hash = hashed_request.query_param_value_hash
    body_text_hash = hashed_request.body_text_hash

    query_params = {}
    query_params[:path] = request.path
    query_params[:method] = request.method
    query_params[:query_param_names_hash] = query_param_name_hash unless query_param_name_hash.empty?
    query_params[:query_param_values_hash] = query_param_value_hash unless query_param_value_hash.empty?
    query_params[:body_text_hash] = body_text_hash unless body_text_hash.empty?

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
      proxy_request = ProxyRequest.new(request, RecordConfigFile.instance.service_url)
      joined_request = JoinedRequest.new(proxy_request).with_response(res)

      joined_request_string = joined_request.build
      api.request_create(
        RecordConfigFile.instance.scenarios_project_key, joined_request_string, {
          importer: 'gor',
          scenario_key: RecordConfigFile.instance.scenarios_scenario_key,
        }
      )
    }
  end

  def disable_web_cache
    request.headers['CACHE-CONTROL'] = 'no-cache'
    request.headers['IF-NONE-MATCH'] = nil
  end

  def get_upload_policy
    request.headers[CUSTOM_HEADERS[:RECORD_POLICY]] || RecordConfigFile.instance.record_policy
  end

  def get_service_url
    request.headers[CUSTOM_HEADERS[:SERVICE_URL]] || RecordConfigFile.instance.service_url
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
