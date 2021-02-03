class RecordConfigsController < ApplicationController
  before_action :set_record_config, only: [:show, :update, :destroy]

  # GET /record_configs
  def index
    @record_configs = RecordConfig.all

    render json: @record_configs
  end

  # GET /record_configs/1
  def show
    render json: @record_config
  end

  # POST /record_configs
  def create
    @record_config = RecordConfig.new(record_config_params)

    if @record_config.save
      render json: @record_config, status: :created, location: @record_config
    else
      render json: @record_config.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /record_configs/1
  def update
    if @record_config.update(record_config_params)
      render json: @record_config
    else
      render json: @record_config.errors, status: :unprocessable_entity
    end
  end

  # DELETE /record_configs/1
  def destroy
    @record_config.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_record_config
      @record_config = RecordConfig.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def record_config_params
      params.fetch(:record_config, {})
    end
end
