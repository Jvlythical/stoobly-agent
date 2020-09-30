require 'digest/md5'

class HashedRequestDecorator

  def initialize(request)
    @request = request
  end

  def query_param_name_hash
    params = []
    @request.query_parameters.each do |key, value|
      params << Digest::MD5.hexdigest(key)
    end

    return '' if params.empty?

    Digest::MD5.hexdigest(params.sort.join('.'))
  end

  def query_param_value_hash
    values = []
    @request.query_parameters.each do |key, value|
      values << Digest::MD5.hexdigest(value) 
    end

    return '' if values.empty?

    Digest::MD5.hexdigest(values.sort.join('.'))
  end

  def body_text_hash
    text = @request.body.read
    return text if text.empty?
    Digest::MD5.hexdigest(text)
  end
end
