class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ReverseProxy::Controller

  def route
    start_time = Time.now

    api = ScenariosApi.new(RecordConfigFile.instance.scenarios_url, RecordConfigFile.instance.scenarios_api_key)
    upload_policy = get_upload_policy

    case upload_policy
    when UPLOAD_POLICY[:NOT_FOUND]
      res = eval_request(api)

      unless res.code == '499'
        simulate_latency(res['X-RESPONSE-LATENCY'], start_time)

        return pass_on(res)
      end

      Rails.logger.warn "Failed to find request, passing on..."
    end
    
    ###
    #
    # If either:
    #   - response was not found
    #   - config/env.yml upload_policy is not configured
    # 
    # then try to forwarding the request to the service specified by RecordConfigFile.instance.service_url
    #
    service_url = get_service_url
    unless service_url
      raise 'config/env.yml service_url is not set'
    end 

    disable_web_cache()

    options = get_options()

    reverse_proxy service_url, options do |config|
      config.on_response do |code, res|
        case upload_policy
        when UPLOAD_POLICY[:ANY]
          upload_request(api, res) 
        end
      end
    end
  end

  private

  def eval_request(api)
    query_params = build_query_params
    api.request_response(RecordConfigFile.instance.scenarios_project_key, query_params)
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
      joined_request = JoinedRequest.new(request).with_response(res)
      joined_request_string = joined_request.build
      api.request_create(
        RecordConfigFile.instance.scenarios_project_key, joined_request_string, importer: 'gor'
      )
    }
  end

  def disable_web_cache
    request.headers['CACHE-CONTROL'] = 'no-cache'
    request.headers['IF-NONE-MATCH'] = nil
  end

  def get_upload_policy
    request.headers['X-UPLOAD-POLICY'] || RecordConfigFile.instance.scenarios_record_policy
  end

  def get_service_url
    request.headers['X-SERVICE-URL'] || RecordConfigFile.instance.service_url
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
