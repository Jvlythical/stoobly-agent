require 'digest/md5'

class ResponseString
  RESPONSE_TYPE = 2
  CLRF = "\r\n"

  def initialize(response, request_id)
    @response = response
    @lines = []
    @latency = 0
    @request_id = request_id

    response_line
    headers
    body
  end
  
  ###
  #
  # 1 - response type
  # 2 - request id
  # 3 - timestamp in nano seconds
  # 4 - response latency in nano seconds
  #
  def control
    @lines.unshift "#{RESPONSE_TYPE} #{@request_id} #{current_time} #{@latency}" 
  end

  def response_line
    @lines.push "HTTP/1.1 #{@response.code}"
  end

  def headers
    @response.each_capitalized.each do |name, val|
      @lines.push ["#{to_header_case(name)}:", val].join(' ')
    end
  end

  def body
    if @response.body.is_a? String
      @lines.push "#{CLRF}#{@response.body}"
    else
      @response.body.rewind
      @lines.push "#{CLRF}#{@response.body.read}"
    end
  end

  def with_latency(latency)
    @latency = latency
  end

  def get 
    control

    @lines.join CLRF
  end

  private

  def to_header_case(header)
    toks = header.split /_|-/
    return header if toks.length == 1

    toks = toks.map do |tok|
      tok.downcase.capitalize 
    end
    toks.join('-')
  end
  
  def current_time
    (Time.now.to_f * (10 ** 6)).round
  end
end
