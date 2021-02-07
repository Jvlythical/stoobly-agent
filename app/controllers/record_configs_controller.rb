class RecordConfigsController < ApplicationController
  before_action :set_record_config, only: [:show, :update, :destroy]

  # GET /record_configs
  def index
    @record_configs = begin
      RecordConfig.all.where(scenarios_project_key: params[:project_key])
    end

    render json: @record_configs
  end

  # GET /record_configs/1
  def show
    render json: @record_config
  end

  # POST /record_configs
  def create
    @record_config = RecordConfig.new(record_config_params)
    @record_config.scenarios_url = RecordConfigFile.instance.scenarios_url

    if @record_config.save
      RecordConfigFile.instance.sync(
        @record_config.scenarios_project_key, @record_config.scenarios_scenario_key
      )

      render json: @record_config, status: :created, location: @record_config
    else
      render json: @record_config.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /record_configs/1
  def update
    if @record_config.update(record_config_params)
      RecordConfigFile.instance.sync(
        @record_config.scenarios_project_key, @record_config.scenarios_scenario_key
      )

      render json: @record_config
    else
      render json: @record_config.errors, status: :unprocessable_entity
    end
  end

  # DELETE /record_configs/1
  def destroy
    @record_config.destroy
  end

  def policies
    render json: RecordConfig.scenarios_record_policies.values, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_record_config
      @record_config = RecordConfig.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def record_config_params
      params.require(:record_config).permit( 
        :scenarios_api_key, 
        :scenarios_project_key, 
        :scenarios_record_policy,
        :scenarios_record_match_pattern,
        :scenarios_scenario_key,
        :service_url
      )
    end
end
