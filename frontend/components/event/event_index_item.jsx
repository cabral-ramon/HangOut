import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event}) => {
    return (
      <Link
        to={`/events/${event.id}`}
        style={{
          textDecoration: 'none'}}
          className="event-item-container">
        <li className="event-container">
          <div className="event-time-container">
            <p>{event.time}</p>
          </div>
          <div className="event-info-container">
            <p>{event.groupId}</p>
            <h4
              className="event-name">
              {event.name.length > 30 ?
                event.name.slice(0,30) + '...' : event.name}
              </h4>
              <p>{event.attendees.length} Member(s) going</p>
              <p className="event-location">{event.location}</p>
          </div>
          </li>
      </Link>
    );
  };

export default EventIndexItem;
