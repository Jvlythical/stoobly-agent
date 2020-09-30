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
    res = api.request_response(Config.instance.project_id, query_params)
  end
end
