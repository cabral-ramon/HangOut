# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'
#
#
# 20.times do
#   username = Faker::Name.unique.name
#   email = Faker::Internet.unique.email
#   password = Faker::Internet.password(8)
#   location = Faker::Address.city
#   user = User.create(username: username, email: email, password: password, location: location)
# end

# User.delete_all
#
# 100.times do
#   username = Faker::LeagueOfLegends.unique.champion
#   email = Faker::Internet.unique.email
#   password = "password"
#   location = Faker::Address.city
#   user = User.create(username: username, email: email, password: password, location: location)
# end
#
# user1 = User.create(username: "Guest User", password: "password", email: "guestuser@gmail.com", location: "New York, NY")


Group.delete_all


30.times do

  images = ['app/assets/images/animal.jpg', 'app/assets/images/business.jpeg', 'app/assets/images/cat.jpeg', 'app/assets/images/cycle.jpeg', 'app/assets/images/food.jpg', 'app/assets/images/game.jpeg', 'app/assets/images/hack.jpeg', 'app/assets/images/health.jpeg', 'app/assets/images/language.jpeg', 'app/assets/images/learn.jpg', 'app/assets/images/mom.jpeg', 'app/assets/images/music.jpg', 'app/assets/images/paint.jpeg', 'app/assets/images/paint.jpeg', 'app/assets/images/photography.jpg', 'app/assets/images/picture.jpeg', 'app/assets/images/picture2.jpeg', 'app/assets/images/picture3.jpeg', 'app/assets/images/picture4.jpeg']

  name = Faker::Lorem.unique.sentence
  description = Faker::Lorem.unique.paragraph(5)
  location = Faker::Address.city
  image = File.open(images.shuffle[0])
  group = Group.create(name: name, description: description, location: location, image: image)
end

group1 = Group.create(
  name: "Brooklyn Pickup Soccer Group",
  description: "Bklyn Pickup Soccer is a coed soccer group that plays year-round. Founded by John Thomas in 2008, this group has grown and evolved to over 4,000 members, hosting numerous pickup games all over Brooklyn. Everyone is welcome to attend (so long as people RSVP and respect our rules). Games tend to play on an intermediate level.

  We have recently partnered with the New York Independent Schools League (NYISL), a local organization that runs free soccer leagues and clinics for New York's underserved youth who don't have access to athletics programs. Check it out at http://www.nyisl.com .

  Each session has a per player fee of $2-$3. A small part of this fee goes to cover our overhead (e.g., meetup.com dues, equipment upgrades, laundry, etc.) - and a larger portion is donated to the NYISL. If you're a regular player, a $33 one-time donation will get you year-long, unlimited access to all our games. And you'll only be paying pennies per game to play for a good cause.

  Game Organizers and NYISL Volunteers play for free. If you're interested in becoming an organizer (by helping out with existing sessions or hosting a new game in your particular area of BK), or an NYISL Volunteer please reach out to the leadership team (Mike B or Greg P).

  See you out on the pitch!

  Please Note: Brooklyn Pickup Soccer is not liable for any injuries that may occur while playing. By RSVPing to attend our games, you accept full responsibility of your person and belongings, waiving any right to hold the group responsible.",
  location: "Brooklyn, NY",
  image: File.open('app/assets/images/soccer.jpeg'))
group2 = Group.create(
  name: "The Classical Musicians' Rehearsal Symphony Orchestra, LLC",
  description: "The Classical Musicians' Rehearsal Symphony Orchestra, LLC, is New York's only dedicated reading orchestra, composed of serious musicians who play just for the love of it. A reading orchestra is a musical organization whose focus is on playing simply for the love of it, absent the administrative and financial pressures associated with public concert performance. Auditions are not required. All accomplished instrumentalists — professional and amateur, irrespective of age, experience, or walk of life — who share a love of classical music and the desire to make music with like-minded musicians are welcome to belong. We recently established a residency with Bloomingdale School of Music (BSM) and rehearse in BSM's David Greer Concert Hall on Thursdays, from 12 noon until 2 p.m. A detailed calendar and our repertoire history are posted at our Website. Seating is not competitive. Musicians are free to choose their seats and also free to choose which part to play. We are not concerned with imbalances in attendance; e.g., many flutists, few violists. We play, just for the love of it! RSVP via Contact Us is requested so we can provide practice parts and complete details in advance of each rehearsal.",
  location: "New York, NY",
  image: File.open('app/assets/images/music.jpg'))
group3 = Group.create(
  name: "Chess with Cats club",
  description: "We are a crazy cat people who also love to play chess! We get together on Sundays at the cat cafe and play chess. Cats welcomed!",
  location: "Queens, NY",
  image: File.open('app/assets/images/cat.jpeg')
)
group4 = Group.create(
  name: "Staten Island Soul Cyclers",
  description: "The most awesomest soul cycle club ever! We get together at the pier gym on tuesdays and thursdays. Come join us! Members get a free t-shirt",
  location: "Staten Island, NY",
  image: File.open('app/assets/images/cycle.jpeg')
)
group5 = Group.create(
  name: "NJ's Entrepreneurs Investors Haven in Real Estate",
  description: "This MeetUp is about entrepreneurs joining forces to develop real estate deals not only in New Jersey, but also nationwide.

This is where you can find the experts to guide you in the right direction for whatever part of the real estate business you are in.

This isn't a MeetUp for just networking only, but to actual get deals done!

We will have Guest Speakers and encourage testimonials as well.

This MeetUp began on March 27, 2017 and will be every Monday thereafter from 7:00pm to 9:30pm at La Rouge Lounge located at 972 Broad St. in Newark, NJ.",
  location: "Newark, NJ",
  image: File.open('app/assets/images/business.jpeg')
)
group6 = Group.create(
  name: "Bronx Spongebob fan club",
  description: "We meet once a month and binge watch spongebob episodes!",
  location: "Bronx, NY",
  image: File.open('app/assets/images/sponge.jpg')
  )
group7 = Group.create(
  name: "Hacker Hours",
  description: "Free office hours for programming help - any programming language, all skill levels. The format is super simple: you come with your laptop, sit and hang out and code, and flag down one of the organizers if you have a question. That's it! If we can't answer your question, we'll find you someone who can, or at least point you in the right direction.",
  location: "New York, NY",
  image: File.open('app/assets/images/hack.jpeg')
)
group8 = Group.create(
  name: "First Time Upper West Side Moms",
  description: "Meet other friendly First (and Second and even Third time!) Upper West Side moms and dads to set up playdates, explore the neighborhood and have fun! Our members share experiences, get advice and make new friends. All parents are welcome and maternity wear is considered completely acceptable attire! While the vast majority of our members are moms, dads are also welcome.",
  location: "New York, NY",
  image: File.open('app/assets/images/mom.jpeg')
  )
group9 = Group.create(
  name: "Westchester Painting Club",
  description: "We get together and paint and drink wine!",
  location: "White Plains, NY",
  image: File.open('app/assets/images/paint.jpeg')
  )

Event.delete_all
 100.times do
   # times = ["7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00AM", "6:00AM", "5:00AM", "4:00AM", "3:00AM", "2:00AM", "1:00AM", "7:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM", "12:00PM", "6:00PM", "5:00PM", "4:00PM", "3:00PM", "2:00PM", "1:00PM"]
   name = Faker::Lorem.unique.sentence
   description = Faker::Lorem.unique.paragraph(5)
   location = Faker::Address.city
   time = times.shuffle[0]
   date = Faker::Date.forward(60)
   event = Event.create(name: name, description: description, location: location, date: date)
 end

Membership.delete_all
 200.times do
   group_id = Group.all.shuffle[0].id
   user_id = User.all.shuffle[0].id
   membership = Membership.create(group_id: group_id, user_id: user_id)
 end

Rsvp.delete_all
 200.times do
   event_id = Event.all.shuffle[0].id
   user_id = User.all.shuffle[0].id
   rsvp = Rsvp.create(event_id: event_id, user_id: user_id)
 end
