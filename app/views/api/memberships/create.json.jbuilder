json.name @group.name
json.description @group.description
json.location @group.location
json.image @group.image
json.members @members do |member|
    json.id member.id
    json.username member.username
end
