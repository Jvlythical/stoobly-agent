class RequestBodyParser
  include Singleton

  JSON = 'application/json'
  WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded'

  def initialize
  end
    
  ###
  #
  # @param request [ActionDispatch::Request]
  #
  def parse(request)
    request.body.rewind
    content = request.body.read
    
    params = {}

    content_type = ''
    content_type = request.content_type unless request.content_type.nil?

    case content_type.downcase
    when JSON
      params = parse_json(content)
    when WWW_FORM_URLENCODED
      params = parse_www_form_urlencoded(content)
    else
      params = request.request_parameters
    end

    request.body.rewind

    params
  end

  private

  def parse_json(content)
    JSON.parse content
  end

  def parse_www_form_urlencoded(content)
    URI.decode_www_form(content)
  end
end
