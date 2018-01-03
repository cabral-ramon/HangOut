# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


20.times do
  username = Faker::Name.unique.name
  email = Faker::Internet.unique.email
  password = Faker::Internet.password(8)
  location = Faker::Address.city
  user = User.create(username: username, email: email, password: password, location: location)
end
