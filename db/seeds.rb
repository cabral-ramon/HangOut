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

Group.delete_all

group1 = Group.create(
  name: "Brooklyn Pickup Soccer Group",
  description: "Bklyn Pickup Soccer is a coed soccer group that plays year-round. Founded by John Thomas in 2008, this group has grown and evolved to over 4,000 members, hosting numerous pickup games all over Brooklyn. Everyone is welcome to attend (so long as people RSVP and respect our rules). Games tend to play on an intermediate level.

  We have recently partnered with the New York Independent Schools League (NYISL), a local organization that runs free soccer leagues and clinics for New York's underserved youth who don't have access to athletics programs. Check it out at http://www.nyisl.com .

  Each session has a per player fee of $2-$3. A small part of this fee goes to cover our overhead (e.g., meetup.com dues, equipment upgrades, laundry, etc.) - and a larger portion is donated to the NYISL. If you're a regular player, a $33 one-time donation will get you year-long, unlimited access to all our games. And you'll only be paying pennies per game to play for a good cause.

  Game Organizers and NYISL Volunteers play for free. If you're interested in becoming an organizer (by helping out with existing sessions or hosting a new game in your particular area of BK), or an NYISL Volunteer please reach out to the leadership team (Mike B or Greg P).

  See you out on the pitch!

  Please Note: Brooklyn Pickup Soccer is not liable for any injuries that may occur while playing. By RSVPing to attend our games, you accept full responsibility of your person and belongings, waiving any right to hold the group responsible.",
  location: "Brooklyn, NY",
  img_url: "https://secure.meetupstatic.com/photos/event/8/4/9/a/600_451113946.jpeg")
group2 = Group.create(
  name: "The Classical Musicians' Rehearsal Symphony Orchestra, LLC",
  description: "The Classical Musicians' Rehearsal Symphony Orchestra, LLC, is New York's only dedicated reading orchestra, composed of serious musicians who play just for the love of it. A reading orchestra is a musical organization whose focus is on playing simply for the love of it, absent the administrative and financial pressures associated with public concert performance. Auditions are not required. All accomplished instrumentalists — professional and amateur, irrespective of age, experience, or walk of life — who share a love of classical music and the desire to make music with like-minded musicians are welcome to belong. We recently established a residency with Bloomingdale School of Music (BSM) and rehearse in BSM's David Greer Concert Hall on Thursdays, from 12 noon until 2 p.m. A detailed calendar and our repertoire history are posted at our Website. Seating is not competitive. Musicians are free to choose their seats and also free to choose which part to play. We are not concerned with imbalances in attendance; e.g., many flutists, few violists. We play, just for the love of it! RSVP via Contact Us is requested so we can provide practice parts and complete details in advance of each rehearsal.",
  location: "New York, NY",
  img_url: "https://secure.meetupstatic.com/photos/event/6/8/a/b/600_465866795.jpeg")
group3 = Group.create(
  name: "Chess with Cats club",
  description: "We are a crazy cat people who also love to play chess! We get together on Sundays at the cat cafe and play chess. Cats welcomed!",
  location: "Queens, NY",
  img_url: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr05/2013/7/1/12/enhanced-buzz-orig-31586-1372695095-18.jpg?downsize=715")
group4 = Group.create(
  name: "Staten Island Soul Cyclers",
  description: "The most awesomest soul cycle club ever! We get together at the pier gym on tuesdays and thursdays. Come join us! Members get a free t-shirt",
  location: "Staten Island, NY",
  img_url: "https://www.wellandgood.com/wp-content/uploads/2017/05/SoulCycle.jpg")
group5 = Group.create(
  name: "NJ's Entrepreneurs Investors Haven in Real Estate",
  description: "This MeetUp is about entrepreneurs joining forces to develop real estate deals not only in New Jersey, but also nationwide.

This is where you can find the experts to guide you in the right direction for whatever part of the real estate business you are in.

This isn't a MeetUp for just networking only, but to actual get deals done!

We will have Guest Speakers and encourage testimonials as well.

This MeetUp began on March 27, 2017 and will be every Monday thereafter from 7:00pm to 9:30pm at La Rouge Lounge located at 972 Broad St. in Newark, NJ.",
  location: "Newark, NJ",
  img_url: "https://secure.meetupstatic.com/photos/event/7/7/7/6/600_463530582.jpeg")
group6 = Group.create(
  name: "Bronx Spongebob fan club",
  description: "We meet once a month and binge watch spongebob episodes!",
  location: "Bronx, NY",
  img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F4%2F4d%2FSpongeBob_SquarePants_characters_cast.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpongeBob_SquarePants&docid=5jJHDKDapcelIM&tbnid=syDoV8ksvoMt2M%3A&vet=10ahUKEwii19uezb7YAhWGSd8KHTJ9D5cQMwjWASgAMAA..i&w=385&h=259&safe=off&bih=953&biw=1600&q=spongebob&ved=0ahUKEwii19uezb7YAhWGSd8KHTJ9D5cQMwjWASgAMAA&iact=mrc&uact=8")
group7 = Group.create(
  name: "Hacker Hours",
  description: "Free office hours for programming help - any programming language, all skill levels. The format is super simple: you come with your laptop, sit and hang out and code, and flag down one of the organizers if you have a question. That's it! If we can't answer your question, we'll find you someone who can, or at least point you in the right direction.",
  location: "New York, NY",
  img_url: "https://secure.meetupstatic.com/photos/event/8/e/3/d/600_444516413.jpeg")
group8 = Group.create(
  name: "First Time Upper West Side Moms",
  description: "Meet other friendly First (and Second and even Third time!) Upper West Side moms and dads to set up playdates, explore the neighborhood and have fun! Our members share experiences, get advice and make new friends. All parents are welcome and maternity wear is considered completely acceptable attire! While the vast majority of our members are moms, dads are also welcome.",
  location: "New York, NY",
  img_url: "https://secure.meetupstatic.com/photos/event/a/9/9/e/600_369283422.jpeg")
group9 = Group.create(
  name: "Westchester Painting Club",
  description: "We get together and paint and drink wine!",
  location: "White Plains, NY",
  img_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fhuckleberryfineart.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fsip-n-paint-1.jpg&imgrefurl=http%3A%2F%2Fhuckleberryfineart.com%2Fevent%2Fpaint-and-wine%2F&docid=glIa4tcMMnZ8yM&tbnid=ohbyaRkfacUhpM%3A&vet=10ahUKEwiX9eDazr7YAhWqQd8KHWFUBnYQMwjPASgAMAA..i&w=700&h=420&safe=off&bih=953&biw=1600&q=painting%20and%20wine&ved=0ahUKEwiX9eDazr7YAhWqQd8KHWFUBnYQMwjPASgAMAA&iact=mrc&uact=8")
