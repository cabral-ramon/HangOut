class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
    render "api/events/index"
  end

  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

  private
  def event_params
    params.require(:event).permit(:name, :description, :date, :time, :location, :group_id)
  end
end
