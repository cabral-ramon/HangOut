import React from 'react';
import { Link } from 'react-router-dom';

class GroupAbout extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.group) {
      return (
        <article className="group-about-wrapper">
          <div>
            <h2>About this Hangout:</h2>
            <p>{this.props.group.description}</p>
            <div className="members-container">
              <h3><span>({this.props.members.length})</span> Members:</h3>
              <ul>
                {this.props.members.map( (member) => (
                  <li key={member.id}>
                    {member.username}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="event-container">
            <div className="group-events-container">
              <div className="group-events-header">
                <h3>Upcoming Hangouts</h3>
                <Link to={`/groups/${this.props.group.id}/events`}>See all</Link>
              </div>
              <ul>
                {this.props.events.slice(0, 3).map( (event, idx) => (
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
                ))}
              </ul>
            </div>
          </div>
        </article>
      );
    } else {
      return null;
    }
  }

}

export default GroupAbout;
