json.event do
  json.id @event.id
  json.name @event.name
  json.description @event.description
  json.location @event.location
  json.date @event.date
  json.time @event.time
  json.group_id @event.group_id
  json.rsvps @event.rsvps
end

json.rsvps do
  @event.rsvps.map { |rsvp| rsvp.user }.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end

json.groups do
    json.set! @event.group.id do
      json.extract! @event.group, :id, :name
    end
end
