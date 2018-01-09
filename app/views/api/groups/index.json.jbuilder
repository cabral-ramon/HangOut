@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :location, :image
    json.memberIds group.member_ids
  end
end
