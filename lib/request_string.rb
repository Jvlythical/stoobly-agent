require 'digest/md5'

class RequestString
  attr_reader :request_id

  REQUEST_TYPE = 1
  CLRF = "\r\n"

  def initialize(request)
    @request = request
    @lines = []

    request_line
    headers
    body
    
    @request_id = generate_request_id
    control
  end

  def control
    @lines.unshift "#{REQUEST_TYPE} #{@request_id} #{current_time}"
  end

  def request_line
    @lines.push "#{@request.method} #{@request.url} HTTP/1.1"
  end

  def headers
    _headers = @request.headers.env.reject { |key| key.to_s.include?('.') }
    _headers.each do |name, val|
      @lines.push ["#{to_header_case(name)}:", val].join(' ')
    end
  end

  def body
    @lines.push "#{CLRF}#{@request.body.read}"
  end

  def get 
    @lines.join CLRF
  end

  private

  def to_header_case(header)
    toks = header.split('_')
    toks = toks.map do |tok|
      tok.downcase.capitalize 
    end
    toks.join('-')
  end

  def generate_request_id
    Digest::MD5.hexdigest(@lines.join CLRF)
  end

  def current_time
    (Time.now.to_f * (10 ** 9)).round
  end
end
