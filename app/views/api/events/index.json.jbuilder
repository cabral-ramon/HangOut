# json.events do
#   @events.each do |event|
#     json.set! event.id do
#       json.extract! event, :id, :name, :description, :location, :date, :time, :group_id, event.rsvps
#
#     end
#   end
# end

json.events do
  @events.each do |event|
    json.set! event.id do
      json.id event.id
      json.name event.name
      json.description event.description
      json.location event.location
      json.date event.date
      json.time event.time
      json.group_id event.group_id

      # json.partial! "api/rsvps/rsvps", rsvps: @rsvps
      json.rsvps event.rsvps
    end
  end
end

json.groups do
  @events.map { |event| event.group }.each do |group|
    json.set! group.id do
      json.extract! group, :id, :name
    end
  end
end
