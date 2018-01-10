import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let eventParams = {
      eventId: this.props.eventId,
      groupId: this.props.groupId
    };
    this.props.fetchEvent(eventParams);
  }

  render() {
    let attendees;
    if (this.props.event.attendees) {
        attendees = this.props.event.attendees.map( (attendee) => {
        return (
          <li key={attendee}>{attendee}</li>
        );
      });
    } else {
      attendees = [];
    }
    return (
      <div>
        <h1>{this.props.event.name}</h1>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.location}</p>
        <p>{this.props.event.date}</p>
        <p>{this.props.event.time}</p>
        <ul>
          {attendees}
        </ul>
      </div>
    );
  }

}

export default withRouter(EventShow);
