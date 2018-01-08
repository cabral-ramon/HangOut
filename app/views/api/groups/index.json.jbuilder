@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :location, :image, :image
    json.members group.members.each do |member|
      json.extract! member, :id, :username, :location
    end
  end
end
