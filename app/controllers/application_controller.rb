class ApplicationController < ActionController::API
  def route
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

    api = ScenariosApi.new(Config.instance.service_url, Config.instance.api_key)

    begin
      res = api.request_response(Config.instance.project_id, query_params)
    rescue RestClient::RequestFailed => err
      res = err.response
    end

    render_response_headers res

    case res.content_type
    when 'application/json'
      render json: res.body, status: res.code
    else
      render plain: res.body, status: res.code
    end
  end

  private

  def render_response_headers(res)
    headers = res.each_capitalized.to_h

    headers.delete 'Transfer-Encoding'
    headers.each do |key, value|
      response.set_header(key, value)
    end
  end
end
