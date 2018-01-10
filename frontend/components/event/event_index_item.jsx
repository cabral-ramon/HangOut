import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event}) => {

    return (
      <Link
        to={`/events/${event.id}`}
        style={{
          textDecoration: 'none'}}>
        <li className="event-container">
          <h4
            className="event-name">
            {event.name.length > 30 ?
              event.name.slice(0,30) + '...' : event.name}
            </h4>
            <p className="event-location">{event.location}</p>
          </li>
      </Link>
    );
  };

export default EventIndexItem;
