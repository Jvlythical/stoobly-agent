require 'singleton'
require 'yaml'

class RecordConfigFile
  include Singleton

  def initialize
    @config = YAML.load_file(File.join(File.dirname(__FILE__), '..', 'config', 'env.yml')) 
    @env = ENV['RAILS_ENV'] || 'development'
  end

  def scenarios_url
    @config.dig(@env, 'scenarios_url') || ENV['SCENARIOS_URL']
  end

  def project_id
    @config.dig(@env, 'project_id') || ENV['SCENARIOS_PROJECT_ID']
  end

  def api_key
    @config.dig(@env, 'api_key') || ENV['SCENARIOS_API_KEY']
  end

  def service_url
    @config.dig(@env, 'service_url') || ENV['SCENARIOS_API_KEY']
  end

  def upload_policy
    @config.dig(@env, 'upload_policy' || ENV['SCENARIOS_UPLOAD_POLICY'])
  end
end
