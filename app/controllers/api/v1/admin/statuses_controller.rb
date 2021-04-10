class Api::V1::Admin::StatusesController < ApplicationController
  # GET /api/v1/admin/statuses/:id
  def show
    status = Rails.cache.read(params[:id])

    if status.nil?
      render nothing: true, status: :not_found
    else
      render plain: status, status: :ok
    end
  end
  
  # PUT /api/v1/admin/statuses/:id
  def update
    Rails.cache.write(params[:id], request.body.read)
    render nothing: true, status: :ok
  end
end
