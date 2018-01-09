class Api::MembershipsController < ApplicationController

  before_action :require_logged_in

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      @group = @membership.group
      render "api/groups/show"
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
     @membership = Membership.where("group_id = ?", params[:group_id]).find_by(user_id: current_user.id)
     if @membership
       @group = @membership.group
       @membership.destroy
       render "api/groups/show"
    end
  end

  private
  def membership_params
    params.require(:membership).permit(:user_id, :group_id)
  end
end
