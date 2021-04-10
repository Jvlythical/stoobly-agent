require 'yaml'

class Api::V1::Admin::SettingsController < ApplicationController
  # GET /api/v1/admin/settings
  def show
    render json: Settings, status: :ok
  end

  # PUT /api/v1/admin/settings
  def update
    settings = Settings.to_hash.deep_stringify_keys

    hash_merge settings, params[:setting]

    settings_path = Rails.root.join('config', 'settings', "#{Rails.env}.yml").to_s

    File.open(settings_path, 'w') do |fp|
      YAML.dump(settings, fp)
    end
    
    if Settings.proxy_config_path
      File.write Settings.proxy_config_path, settings.to_yaml
    end

    Settings.reload!

    render json: Settings, status: :ok
  end

  def policies_show
    case Settings.mode.active
    when MODE[:MOCK]
      render json: MOCK_POLICY, status: :ok
    when MODE[:RECORD]
      render json: RECORD_POLICY, status: :ok
    end
  end

  def modes_show
    active_mode = Settings.mode.active
    
    project_name = nil
    scenario_name = nil
    
    mock = {}
    project = ScenariosApi.decode_project_key(Settings.mode.mock.project_key)
    mock[:project_id] = project['id']
    
    scenario_key = Settings.mode.mock.scenario_key
    unless scenario_key.to_s.empty?
      scenario = ScenariosApi.decode_scenario_key(scenario_key)
      mock[:scenario_id] = scenario['id']
    end

    record = {}
    project = ScenariosApi.decode_project_key(Settings.mode.record.project_key)
    record[:project_id] = project['id']

    scenario_key = Settings.mode.record.scenario_key
    unless scenario_key.to_s.empty?
      scenario = ScenariosApi.decode_scenario_key(scenario_key)
      record[:scenario_id] = scenario['id']
    end

    render json: {
      active: active_mode,
      details: {
        mock: mock,
        record: record,
      },
      enabled: Settings.mode.dig(active_mode, 'enabled'),
      list: MODE.values,
    }, status: :ok
  end

  private

  def hash_merge(a, b)
    a.keys.each do |key|
      next if b[key].nil?

      case b[key].class.to_s
      when 'ActionController::Parameters'
        hash_merge(a[key], b[key])
      else
        a[key] = b[key]
      end
    end
  end

  def required_params?(params, *param_keys)
    raise TypeError unless params.is_a? ActionController::Parameters
    begin
      param_keys.each do |key|
        params.require(key)
      end
    rescue ActionController::ParameterMissing => err
      return bad_request(err)
    end
  end

  def bad_request(err = '')
    Rails.logger.warn err

    render json: err, status: 400
    false
  end
end
