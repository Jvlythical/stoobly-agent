class Api::V1::Admin::StatusesController < ApplicationController
  # GET /api/v1/admin/statuses/:id
  def show
    status = Rails.cache.read(params[:id])

    if status.nil?
      render nothing: true, status: :no_content
    else
      Rails.cache.delete(params[:id])
      render plain: status, status: :ok
    end
  end
  
  # PUT /api/v1/admin/statuses/:id
  def update
    Rails.cache.write(params[:id], request.body.read, expires_in: 1.minute)
    render nothing: true, status: :ok
  end
end
