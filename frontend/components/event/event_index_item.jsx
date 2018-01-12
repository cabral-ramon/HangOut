import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event, group}) => {
  if(event.attendees) {
    return (
      <div className="event-main">
        <Link
          to={`/events/${event.id}`}
          style={{
            textDecoration: 'none'}}
            className="event-item-container">
            <li className="event-container-wrapper">
              <div className="event-container">
                <div className="event-time-container">
                  <p>{event.date}</p>
                  <p>{parseInt(event.time) > 12 ? `${event.time} PM` : `${event.time} AM`}</p>
                </div>
                <div className="event-info-container">
                  <p className="event-group-name">{group.name}</p>
                  <h4
                    className="event-name">
                    {event.name.length > 30 ?
                      event.name.slice(0,30) + '...' : event.name}
                    </h4>
                    <p>{event.attendees.length} Member(s) going</p>
                  </div>
                </div>
              </li>
            </Link>
          </div>
        );
  } else {
    return null;
  }
};

export default EventIndexItem;
