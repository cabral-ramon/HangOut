class Api::GroupsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update]

  def create
    @group = Group.new(group_params)
    @group.owner_id = current_user.id

    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(group_params[:id])

    if @group.update(group_params)
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def index
    @groups = Group.includes(:members).shuffle[0...30]
    render :index
  end

  def show
    @group = Group.includes(:members).find(params[:id])
    render :show
  end

  def destroy
    @group = Group.find(params[:id])
    if @group
      @group.delete
    end
  end

  def search
    @groups = Group.search(group_params[:query])
    render :index
  end

  def edit
  end

  private
  def group_params
    params.require(:group).permit(:name, :location, :description, :image, :query, :id)
  end
end
