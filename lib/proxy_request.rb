class ProxyRequest
  attr_reader :request

  def initialize(request, upstream_url)
    @request = request
    @upstream_url = upstream_url
  end

  def url
    url = @request.url

    url.sub @request.base_url, @upstream_url
  end
end
