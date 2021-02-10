require 'yaml'

class Api::V1::Admin::SettingsController < ApplicationController
  # GET /api/v1/admin/settings
  def show
    render json: Settings, status: :ok
  end

  # PUT /api/v1/admin/settings
  def update
    return unless required_params?(params, :settings)
    
    settings = Settings.to_hash
    hash_merge settings, params[:settings]

    settings_path = Rails.root.join('config', 'settings', "#{Rails.env}.yml").to_s

    File.open(settings_path, 'w') do |fp|
      YAML.dump(settings, fp)
    end

    Settings.reload!

    render json: Settings, status: :ok
  end

  def policies_show
    case Settings.mode
    when MODE[:MOCK]
      render json: MOCK_POLICY, status: :ok
    when MODE[:RECORD]
      render json: RECORD_POLICY, status: :ok
    end
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
