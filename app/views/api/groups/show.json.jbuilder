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
