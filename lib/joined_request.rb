require_relative 'request_string'
require_relative 'response_string'

class JoinedRequest
  REQUEST_DELIMITTER = '🐵🙈🙉'

  def initialize(request)
    @timestamp = Time.now
    @request = request

    @request_string = RequestString.new(request)
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
    [@request_string.get, @response_string.get].join(REQUEST_DELIMITTER)
  end
end
