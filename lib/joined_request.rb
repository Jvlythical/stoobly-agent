require_relative 'request_string'
require_relative 'response_string'
require_relative 'proxy_request'

class JoinedRequest
  REQUEST_DELIMITTER = '🐵🙈🙉'
  
  ###
  #
  # @params proxy_request [ProxyRequest]
  #
  def initialize(proxy_request)
    @timestamp = Time.now
    @proxy_request = proxy_request
    
    @request_string = RequestString.new(proxy_request)
  end

  def with_response(response)
    now = Time.now

    @response_string = ResponseString.new(response, @request_string.request_id)
    
    # milliseconds
    latency = ((now.to_f - @timestamp.to_f) * (10 ** 6)).round
    @response_string.with_latency(latency)

    self
  end

  def build 
    raise 'Missing response' if @response_string.nil?

    request_string = @request_string.get.to_s.force_encoding('UTF-8')
    response_string = @response_string.get.to_s.force_encoding('UTF-8')

    [request_string, response_string].join(REQUEST_DELIMITTER)
  end
end
