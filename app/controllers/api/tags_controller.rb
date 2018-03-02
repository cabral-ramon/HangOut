class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      @group = @tag.group
      render "api/groups/show"
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:name, :group_id);
  end
end
