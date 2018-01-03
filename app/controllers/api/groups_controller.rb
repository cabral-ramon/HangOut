class Api::GroupsController < ApplicationController

  before_action :require_logged_in

  def create
    @group = Group.new(group_params)

    if @group.save
      render "/api/groups/"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.new(group_params)

    if @group.save
      render "/api/groups/"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
  end

  private
  def group_params
    params.require(:group).permit(:name, :location, :description)
  end
end
