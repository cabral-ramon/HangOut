@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :location, :img_url, :image
  end
end
