
json.id @event.id
json.name @event.name
json.description @event.description
json.location @event.location
json.date @event.date
json.time @event.time
json.group_id @event.group_id
json.attendees @event.attendee_ids


# json.set! @event.id do
#   json.extract! @event, :id, :name, :description, :location, :date, :time, :group_id
#   json.attendees @event.attendee_ids
# end
