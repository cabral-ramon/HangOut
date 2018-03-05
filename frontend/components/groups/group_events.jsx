import React from 'react';
import { Link } from 'react-router-dom';
import EventFormContainer from '../event/event_form_container';

class GroupEvents extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.events) {
      return (
        <div className="event-container">
          <div className="group-events-container">
            <div id="group-events-head">
              <div>
                <h3>Events:</h3>
              </div>
              <EventFormContainer />
            </div>
            <ul>
              {this.props.events.map( (event) => (
                <li key={event.id}
                  className="group-event-li">
                  <div className="event-list-container">
                    <p className="event-list-date">{event.date}</p>
                    <Link to={`/events/${event.id}`}
                      className="event-list-name">
                      {event.name}
                    </Link>
                    <article className="event-list-desc">
                      {event.description}
                    </article>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default GroupEvents;
