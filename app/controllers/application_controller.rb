class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ReverseProxy::Controller

  def route
    start_time = Time.now

    api = ScenariosApi.new(Config.instance.scenarios_url, Config.instance.api_key)
    query_params = build_query_params

    res = api.request_response(Config.instance.project_id, query_params)
    
    ###
    #
    # Request not found status code is 499
    #
    # If the response was not found, try to forward the request to
    # the service specified by Config.instance.service_url
    #
    # Otherwise, return response headers, body, and status code
    if res.code == '499' && Config.instance.service_url
      Rails.logger.debug "Failed to find request, passing on..."

      options = {
        headers: { 'CONNECTION' => nil }, # Disable setting connection, keep-alive is not supported
        http: { open_timeout: 5 },
      }

      reverse_proxy Config.instance.service_url, options do |config|
        config.on_response do |code, res|
          joined_request = JoinedRequest.new(request).with_response(res)
          joined_request_string = joined_request.build
          api.request_create(
            Config.instance.project_id, joined_request_string, importer: 'gor'
          )
        end
      end
    else
      expected_latency = res['X-RESPONSE-LATENCY']

      unless expected_latency.nil?
        estimated_rtt_network_latency = 0.015 # seconds
        api_latency = (Time.now - start_time)
        expected_latency = expected_latency.to_f / 1000

        wait_time = expected_latency - estimated_rtt_network_latency - api_latency

        Rails.logger.debug "Expected latency: #{expected_latency}"
        Rails.logger.debug "API latency: #{api_latency}"
        Rails.logger.debug "Wait time: #{wait_time}"

        sleep wait_time unless wait_time < 0
      end

      render_response_headers res
      render plain: res.body, status: res.code
    end
  end

  private
  
  ###
  
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
end
