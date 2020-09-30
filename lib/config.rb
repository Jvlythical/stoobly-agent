require 'singleton'
require 'yaml'

class Config
  include Singleton

  def initialize
    @config = YAML.load_file(File.join(File.dirname(__FILE__), '..', 'config', 'env.yml')) 
    @env = ENV['SCENARIOS_ENV'] || 'development'
  end

  def service_url
    @config.dig(@env, 'service_url') || ENV['SCENARIOS_SERVICE_URL']
  end

  def project_id
    @config.dig(@env, 'project_id') || ENV['SCENARIOS_PROJECT_ID']
  end

  def api_key
    @config.dig(@env, 'api_key') || ENV['SCENARIOS_API_KEY']
  end
end
