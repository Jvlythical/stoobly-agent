require 'net/http'

class ScenariosApi
  REQUESTS_ENDPOINT = '/requests'

  def initialize(service_url, api_key)
    @service_url = service_url
    @api_key = api_key 
  end

  def request_create(project_id, requests, **params)
    url = "#{@service_url}#{REQUESTS_ENDPOINT}" 
    uri = URI.parse(url)
    
    req = Net::HTTP::Post.new(uri)

    set_headers(req) 

    body = {
      project_id: project_id,
      requests: requests,
    }.merge(params)
    req.set_form_data(body)

    send(uri, req)
  end

  def request_response(project_id, **query_params)
    url = "#{@service_url}#{REQUESTS_ENDPOINT}/response" 
    uri = URI.parse url

    params = {
      project_id: project_id
    }.merge(query_params)
    uri.query = URI.encode_www_form(params)

    req = Net::HTTP::Get.new(uri)
    set_headers(req)
    
    Rails.logger.debug "Request URL: #{uri}"

    send(uri, req) 
  end
  
  private

  def send(uri, req)
    Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') { |http|
      http.request(req)
    }
  end

  def set_headers(req)
    headers = default_headers
    headers.each do |name, value|
      req[name] = value
    end
  end

  def default_headers
    {
      X_API_KEY: @api_key
    }
  end
end
