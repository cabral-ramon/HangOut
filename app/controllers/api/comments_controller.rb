class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @group = @comment.group
      render "api/groups/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
  end

  def show
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @group = @comment.group
      @comment.delete
      render "api/groups/show"
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :group_id, :event_id);
  end
end
