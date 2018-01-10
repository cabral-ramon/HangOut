class Api::RsvpsController < ApplicationController
  before_action :require_logged_in

  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      @event = @rsvp.event
      render "api/events/show"
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def destroy
     @rsvp = Rsvp.where("event_id = ?", params[:eventId]).find_by(user_id: current_user.id)
     if @rsvp
       @rsvp.destroy
       @event = @rsvp.event
       render "api/events/show"
    end
  end

  private
  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id)
  end
end
