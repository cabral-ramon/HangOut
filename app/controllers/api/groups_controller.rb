class Api::GroupsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update]

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

  def index
    @groups = Group.all.shuffle[0...9]
    render :index
  end

  def show
    @group = Group.find(params[:id])
    render "/api/groups/#{@group.id}"
  end

  def destroy
    @group = Group.find(params[:id])
  end

  private
  def group_params
    params.require(:group).permit(:name, :location, :description, :img_url)
  end
end
