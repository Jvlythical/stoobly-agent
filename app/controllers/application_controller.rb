class ApplicationController < ActionController::API
  def route
    api = ScenariosApi.new(Config.instance.service_url, Config.instance.api_key)
    query_params = build_query_params

    begin
      res = api.request_response(Config.instance.project_id, query_params)
    rescue RestClient::RequestFailed => err
      res = err.response
    end

    render_response_headers res

    render plain: res.body, status: res.code
  end

  private

  def build_query_params
    hashed_request = HashedRequestDecorator.new(request)

    query_param_name_hash = hashed_request.query_param_name_hash
    query_param_value_hash = hashed_request.query_param_value_hash
    body_text_hash = hashed_request.body_text_hash

    query_params = {}
    query_params[:path] = request.path
    query_params[:method] = request.method
    query_params[:query_param_name_hash] = query_param_name_hash unless query_param_name_hash.empty?
    query_params[:query_param_value_hash] = query_param_value_hash unless query_param_value_hash.empty?
    query_params[:body_text_hash] = body_text_hash unless body_text_hash.empty?

    query_params
  end

  def render_response_headers(res)
    headers = res.each_capitalized.to_h
    
    # Without deleting this header, causes caller to stall
    headers.delete 'Transfer-Encoding'

    headers.each do |key, value|
      response.set_header(key, value)
    end
  end
end
