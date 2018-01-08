class Api::MembershipsController < ApplicationController

  before_action :require_logged_in

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(membership_params)
  end

  private
  def membership_params
    params.require(:membership).permit(:user_id, :group_id)
  end
end
