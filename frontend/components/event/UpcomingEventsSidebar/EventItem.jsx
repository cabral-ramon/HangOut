import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({event}) => (
  <li key={event.id} className="event-list-wrapper">
    <div className="event-list-container">
      <p className="event-list-date">{event.date}</p>
      <Link to={`/events/${event.id}`}
        className="event-list-name">
        {event.name}
      </Link>
      <div id="going-bar">{event.rsvps.length} going</div>
      <Link to={`/events/${event.id}`}
        id="attend-link">Attend</Link>
    </div>
  </li>
);

export default EventItem;
