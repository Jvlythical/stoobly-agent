require 'rest-client'

class ScenariosApi
  REQUESTS_ENDPOINT = '/requests'

  def initialize(service_url, api_key)
    @service_url = service_url
    @api_key = api_key 
  end

  def request_response(project_id, **query_params)
    url = "#{@service_url}#{REQUESTS_ENDPOINT}/response" 

    headers = default_headers
    params = {
      project_id: project_id
    }.merge(query_params)

    headers[:params] = params

    RestClient.get url, headers
  end
  
  private

  def default_headers
    {
      X_API_KEY: @api_key
    }
  end
end
