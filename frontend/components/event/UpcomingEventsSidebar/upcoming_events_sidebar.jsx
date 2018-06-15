import React from 'react';
import { Link } from 'react-router-dom';

import EventItem from './event_item';

const UpcomingEventSideBar = ({events, groupId}) => (
  <div className="event-container">
    <div className="group-events-container">
      <div className="group-events-header">
        <h3>Upcoming Hangouts</h3>
        <Link to={`/groups/${groupId}/events`}>See all</Link>
      </div>
      <ul>
        {events.slice(0, 3).map( (event, idx) => (
          <EventItem key={idx} event={event} />
        ))}
      </ul>
    </div>
  </div>
);

export default UpcomingEventSideBar;
