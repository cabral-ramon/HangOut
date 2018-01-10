@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :description, :location, :date, :time, :group_id
    json.attendees event.attendee_ids
  end
end
