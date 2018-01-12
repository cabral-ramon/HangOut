# Hangout

Hangout is a social networking site that brings people of common interests together.
The site centers around groups of users who can schedule events and activities for other users to join and participate in.
Users can find groups and events by browsing the site. They can also create their own groups and events.
Hangout was inspired by the site, [MeetUp](https://www.meetup.com).
The live site is available [here](https://aa-hangout.herokuapp.com).

![alt text](https://github.com/cabral-ramon/HangOut/blob/master/Docs/Mockups/Hangout.png)

## Technologies
Hangout was built using Ruby on Rails as a backend API and React.js as the frontend technology. The site is hosted on heroku
which works great with postgresql, the database used for hangout.
React was great for this project. React allowed me to keep a normalized state on my frontend that was a reflection of the
data held in my backend. This allowed me to create a responsive single page application. Components only render or re-render
by checking if their state (data) has changed.

here is sample of how I set up state on the frontend:
![alt text](https://github.com/cabral-ramon/HangOut/wiki/Sample-State)


## Challenges
One of the biggest challenges of this app was managing the frontend data from all the different sources on a single page.
For example, a groups show page contains the groups information, its members and their information, and all of the events
that have been created for that group.

## Future implementations
In the future I would like to implement a handful of features to add more depth to the site.
These features are search for events and groups, categories / tags that will be applied to groups and events to allow Users
to better find groups and events that fit their interest. Lastly, I would like to add google maps to the site to make it
easier for users to find where a particular event is being held.
