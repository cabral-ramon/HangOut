@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :location, :image, :image
  end
end
