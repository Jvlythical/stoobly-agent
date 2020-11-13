require 'net/http'

class ScenariosApi
  REQUESTS_ENDPOINT = '/requests'

  def initialize(service_url, api_key)
    @service_url = service_url
    @api_key = api_key 
  end

  def request_response(project_id, **query_params)
    url = "#{@service_url}#{REQUESTS_ENDPOINT}/response" 
    uri = URI.parse url

    params = {
      project_id: project_id
    }.merge(query_params)
    uri.query = URI.encode_www_form(params)

    req = Net::HTTP::Get.new(uri)

    headers = default_headers
    headers.each do |name, value|
      req[name] = value
    end

    Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') { |http|
      http.request(req)
    }
  end
  
  private

  def default_headers
    {
      X_API_KEY: @api_key
    }
  end
end
