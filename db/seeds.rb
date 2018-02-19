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

User.all.each do |user|
  user.image = File.open('app/assets/images/default.png')
  user.save
end
# Event.all.each do |event|
#   organizer = event.group.members.shuffle[0]
#   event.organizer_id = organizer.id
#   event.organizer = organizer
#   event.save
#   Rsvp.create(event_id: event.id, user_id: organizer.id)
# end
# Comment.delete_all
#
# 30.times do
#   group = Group.all.shuffle[0]
#   author_id = group.members.shuffle[0].id
#   body = Faker::HowIMetYourMother.quote
#   Comment.create(group_id: group.id, author_id: author_id, body: body)
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
#
#
#
#
# 30.times do
#
#   images = ['app/assets/images/animal.jpg', 'app/assets/images/business.jpeg', 'app/assets/images/cat.jpeg', 'app/assets/images/cycle.jpeg', 'app/assets/images/food.jpg', 'app/assets/images/game.jpeg', 'app/assets/images/hack.jpeg', 'app/assets/images/health.jpeg', 'app/assets/images/language.jpeg', 'app/assets/images/learn.jpg', 'app/assets/images/mom.jpeg', 'app/assets/images/music.jpg', 'app/assets/images/paint.jpeg', 'app/assets/images/paint.jpeg', 'app/assets/images/photography.jpg', 'app/assets/images/picture.jpeg', 'app/assets/images/picture2.jpeg', 'app/assets/images/picture3.jpeg', 'app/assets/images/picture4.jpeg']
#
#   name = Faker::Lorem.unique.sentence
#   description = Faker::Lorem.unique.paragraph(5)
#   location = Faker::Address.city
#   image = File.open(images.shuffle[0])
#   group = Group.create(name: name, description: description, location: location, image: image)
# end
# Group.delete_all
# #
# group1 = Group.create(
#   name: "Brooklyn Pickup Soccer Group",
#   description: "Bklyn Pickup Soccer is a coed soccer group that plays year-round. Founded by John Thomas in 2008, this group has grown and evolved to over 4,000 members, hosting numerous pickup games all over Brooklyn. Everyone is welcome to attend (so long as people RSVP and respect our rules). Games tend to play on an intermediate level.
#   We have recently partnered with the New York Independent Schools League (NYISL), a local organization that runs free soccer leagues and clinics for New York's underserved youth who don't have access to athletics programs. Check it out at http://www.nyisl.com .
#   Each session has a per player fee of $2-$3. A small part of this fee goes to cover our overhead (e.g., meetup.com dues, equipment upgrades, laundry, etc.) - and a larger portion is donated to the NYISL. If you're a regular player, a $33 one-time donation will get you year-long, unlimited access to all our games. And you'll only be paying pennies per game to play for a good cause.
#   Game Organizers and NYISL Volunteers play for free. If you're interested in becoming an organizer (by helping out with existing sessions or hosting a new game in your particular area of BK), or an NYISL Volunteer please reach out to the leadership team (Mike B or Greg P).
#   See you out on the pitch!
#   Please Note: Brooklyn Pickup Soccer is not liable for any injuries that may occur while playing. By RSVPing to attend our games, you accept full responsibility of your person and belongings, waiving any right to hold the group responsible.",
#   location: "Brooklyn, NY",
#   image: File.open('app/assets/images/soccer.jpeg'),
#   owner_id: User.all.shuffle.first.id
# )
# group2 = Group.create(
#   name: "The Classical Musicians' Rehearsal Symphony Orchestra, LLC",
#   description: "The Classical Musicians' Rehearsal Symphony Orchestra, LLC, is New York's only dedicated reading orchestra, composed of serious musicians who play just for the love of it. A reading orchestra is a musical organization whose focus is on playing simply for the love of it, absent the administrative and financial pressures associated with public concert performance. Auditions are not required. All accomplished instrumentalists — professional and amateur, irrespective of age, experience, or walk of life — who share a love of classical music and the desire to make music with like-minded musicians are welcome to belong. We recently established a residency with Bloomingdale School of Music (BSM) and rehearse in BSM's David Greer Concert Hall on Thursdays, from 12 noon until 2 p.m. A detailed calendar and our repertoire history are posted at our Website. Seating is not competitive. Musicians are free to choose their seats and also free to choose which part to play. We are not concerned with imbalances in attendance; e.g., many flutists, few violists. We play, just for the love of it! RSVP via Contact Us is requested so we can provide practice parts and complete details in advance of each rehearsal.",
#   location: "New York, NY",
#   image: File.open('app/assets/images/music.jpg'),
#   owner_id: User.all.shuffle.first.id
# )
# group3 = Group.create(
#   name: "Chess with Cats club",
#   description: "We are a crazy cat people who also love to play chess! We get together on Sundays at the cat cafe and play chess. Cats welcomed!",
#   location: "Queens, NY",
#   image: File.open('app/assets/images/cat.jpeg'),
#   owner_id: User.all.shuffle.first.id
# )
# group4 = Group.create(
#   name: "Staten Island Soul Cyclers",
#   description: "The most awesomest soul cycle club ever! We get together at the pier gym on tuesdays and thursdays. Come join us! Members get a free t-shirt",
#   location: "Staten Island, NY",
#   image: File.open('app/assets/images/cycle.jpeg'),
#   owner_id: User.all.shuffle.first.id
# )
# group5 = Group.create(
#   name: "NJ's Entrepreneurs Investors Haven in Real Estate",
#   description: "This MeetUp is about entrepreneurs joining forces to develop real estate deals not only in New Jersey, but also nationwide. This is where you can find the experts to guide you in the right direction for whatever part of the real estate business you are in. This isn't a MeetUp for just networking only, but to actual get deals done! We will have Guest Speakers and encourage testimonials as well. This MeetUp began on March 27, 2017 and will be every Monday thereafter from 7:00pm to 9:30pm at La Rouge Lounge located at 972 Broad St. in Newark, NJ.",
#   location: "Newark, NJ",
#   image: File.open('app/assets/images/business.jpeg'),
#   owner_id: User.all.shuffle.first.id
# )
# group6 = Group.create(
#   name: "Bronx Spongebob fan club",
#   description: "We meet once a month and binge watch spongebob episodes!",
#   location: "Bronx, NY",
#   image: File.open('app/assets/images/sponge.jpg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group7 = Group.create(
#   name: "Hacker Hours",
#   description: "Free office hours for programming help - any programming language, all skill levels. The format is super simple: you come with your laptop, sit and hang out and code, and flag down one of the organizers if you have a question. That's it! If we can't answer your question, we'll find you someone who can, or at least point you in the right direction.",
#   location: "New York, NY",
#   image: File.open('app/assets/images/hack.jpeg'),
#   owner_id: User.all.shuffle.first.id
# )
# group8 = Group.create(
#   name: "First Time Upper West Side Moms",
#   description: "Meet other friendly First (and Second and even Third time!) Upper West Side moms and dads to set up playdates, explore the neighborhood and have fun! Our members share experiences, get advice and make new friends. All parents are welcome and maternity wear is considered completely acceptable attire! While the vast majority of our members are moms, dads are also welcome.",
#   location: "New York, NY",
#   image: File.open('app/assets/images/mom.jpeg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group9 = Group.create(
#   name: "Westchester Painting Club",
#   description: "We get together and paint and drink wine!",
#   location: "White Plains, NY",
#   image: File.open('app/assets/images/paint.jpeg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group10 = Group.create(
#   name: "Astoria Cryptocurrency Happy Hour",
#   description: "The goal of this meetup is to facilitate cryptocurrency traders in the Astoria community to share market insights, review new technology, and to build smart portfolios for the future of cryptocurrency. This meetup group will focus on identifying future trends in the cryptocurrency ecosystem. Those who are curious about trading cryptocurrencies should join. All levels of expertise are welcome to join and contribute.",
#   location: "Astoria, NY",
#   image: File.open('app/assets/images/hack.jpeg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group11 = Group.create(
#   name: "Beer, Whiskey and Soccer at Passage Irish Bar and Kitchen",
#   description: "Come watch all the European Cup and Copa America matches here at Passage on our TV's and our big back room screen with sound! We will be featuring different beer and whiskey specials for all the big games. Reserve for big groups or come in and hang with all the local Astoria soccer fans. See you soon!!",
#   location: "Astoria, NY",
#   image: File.open('app/assets/images/soccer.jpeg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group12 = Group.create(
#   name: "NYC Indie Film, Photography, Actors, Writers & Art Creators",
#   description: "Welcome All Art-Preneurs!!vNow, more than ever, in our new digital age learning, networking and sharing are critical to achieving success in the Arts! We're here to help you build upon your creative vision with resources, knowledge and tools that will enable you to create, sell and promote your remarkable art. Our mission is to learn from each other, be inspired, and gain a fresh perspective while building visibility and stability for your business. If you're here, this is probably a good description of who you are: Whether you work for yourself or others, YOU, like our members have an outstanding entrepreneurial mind, a spirit that believes in yourself and are truly passionate about the work you do. You exemplify professionalism because daily your energy is put to good effort whether it's learning something new, teaching others or creating a better way to operate your business. Looking forward to meeting up with you!",
#   location: "New York, NY",
#   image: File.open('app/assets/images/photography.jpg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group13 = Group.create(
#   name: "Astoria, NYC Working Mommy Meetup Group",
#   description: "Calling all working moms! This is a group for any working mom interested in meeting other working moms who find that really difficult balance between working full time and taking care of your little one(s). No one is perfect and we all can sure use the support! I'm sure some days you just want to quit and give up or at least start crying because it can all be so challenging at times. I started this group because I've met so many stay at home moms but not so many working moms in Astoria. All neighborhoods are welcome of course! We can chat, text, call, Skype and all share our stories. Together we can set up play dates, plan fun activities for our children and also for ourselves. Which mom wouldn't like a moms night out, even if just for coffee, perhaps drinks or even dinner? Looking forward to meeting you and sharing the wonderful world of being a mom and doing it all!",
#   location: "Astoria, NY",
#   image: File.open('app/assets/images/mom.jpeg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group14 = Group.create(
#   name: "New York Piano Group",
#   description: "This group is for anyone interested in the art of piano playing. We are a group consisting of members from all walks of life. Members range from professional pianists, amateurs, beginners, students, hobbyists, concert goers and enthusiasts. Members can find out about piano related events in the city and take part in a Member Showcase Concert each summer. For more information and inquiries, send an email to newyorkpianogroup@yahoo.com
#   About Membership: We are asking for a minimum membership contribution of $2.00 which is due on January 1 of each year.
#   Your membership contribution will help us to grow and sustain our group's presence on Meetup. Members can network with other members, suggest a meetup, take part as a performer in our annual event such as the Member Showcase Concert and participate in various events that are announced throughout the year.",
#   location: "New York, NY",
#   image: File.open('app/assets/images/music.jpg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group15 = Group.create(
#   name: "Nippon Food Club of NYC",
#   description: "Meet other local sake, sushi and japanese food lovers! This group is for sharing our love and enthusiasm for sake, sushi and other types of Japanese food. I'm sure you have your favorites - let's share and explore! Here's the basic format: Mission #1 (Todd): Where's the Best Ramen In NYC!!! Mission #2 (Open): The Best of Hidden Japan (Right here in NYC)!!!! Mission #3 (Mike): Find the Best Sushi Spot! Mission #4 (Open): Best of Yakitori in NYC!!! Mission #5 (Todd): Best of the Best Sake Joints!!! Mission #6 (Open): Best Soba Spots! Mission #7 (Open): Curry Club Finds! Mission #8 (Open): Who has the best Katsu....hmmm.. Mission #9 (Open): Cheap eats! Bento Boxes for under $12 Bucks? Mission #10 (Todd): Japan Underground...Hip Hop, Jazz, Rock etc. Right here in NYC! Mission #11 (Ralph): Hidden Okonomiyaki Spots! Mission #12 (Todd): Karaoke Anyone? Mission #13 (Todd): Best Japanese, Korean and Chinese Dive Bars! The grungier the better! Mission #14 (Todd): Fun things to do at Japanese Restaurants (Shogi, Hanafuda etc.)!!! Mission #15 (Todd): Japanese Dessert Shops! Email me with questions, comments and or suggestions.",
#   location: "New York, NY",
#   image: File.open('app/assets/images/food.jpg'),
#   owner_id: User.all.shuffle.first.id
#   )
# group16 = Group.create(
#   name: "New York Corgi Meetup",
#   description: "We are a group of corgi owners and fans. We will try to organize semi-frequent get-togethers in dog-friendly locations around the metro area.",
#   location: "New York, NY",
#   image: File.open('app/assets/images/animal.jpg'),
#   owner_id: User.all.shuffle.first.id
#   )
#
#   # Group.all.each do |group|
#   #   user = User.all.shuffle.first
#   #   group.owner_id = user.id
#   #   group.save!
#   # end
#
# Event.delete_all
#  100.times do
#    # times = ["7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00AM", "6:00AM", "5:00AM", "4:00AM", "3:00AM", "2:00AM", "1:00AM", "7:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM", "12:00PM", "6:00PM", "5:00PM", "4:00PM", "3:00PM", "2:00PM", "1:00PM"]
#    group = Group.all.shuffle[0]
#    name = Faker::Hipster.unique.sentence(5)
#    description = Faker::Hipster.unique.paragraph(5)
#    group_id = group.id
#    location = group.location
#    # time = times.shuffle[0]
#    date = Faker::Date.forward(60)
#    event = Event.create(name: name, description: description, location: location, date: date, group_id: group_id)
#  end
# #
# Membership.delete_all
#  200.times do
#    group_id = Group.all.shuffle[0].id
#    user_id = User.all.shuffle[0].id
#    membership = Membership.create(group_id: group_id, user_id: user_id)
#  end
#
# Rsvp.delete_all
#  200.times do
#    event_id = Event.all.shuffle[0].id
#    user_id = User.all.shuffle[0].id
#    rsvp = Rsvp.create(event_id: event_id, user_id: user_id)
#  end
