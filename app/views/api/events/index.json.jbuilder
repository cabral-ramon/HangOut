json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :name, :description, :location, :date, :time, :group_id
      json.attendees event.rsvp_ids

    end
  end
end

# @groups

json.groups do
  @events.map { |event| event.group }.each do |group|
    debugger
    json.set! group.id do
      json.extract! group, :id, :name
    end
  end
end
