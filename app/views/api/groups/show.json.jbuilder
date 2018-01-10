json.group do
  json.id @group.id
  json.name @group.name
  json.description @group.description
  json.location @group.location
  json.image @group.image
  json.memberIds @group.member_ids
end

json.members do
  @group.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username, :location
    end
  end
end

json.events do
  @group.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :name, :date, :time, :location, :description, :group_id
    end
  end
end
