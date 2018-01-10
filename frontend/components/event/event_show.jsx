import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRsvp = this.deleteRsvp.bind(this);
  }

  componentDidMount() {
    let eventParams = {
      eventId: this.props.eventId,
      groupId: this.props.groupId
    };
    this.props.fetchEvent(eventParams);
  }

  deleteRsvp(e) {
    e.preventDefault();
    this.props.deleteRsvp(this.props.event.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const eventId = this.props.eventId;
    const userId = this.props.currentUser.id;
    const rsvpParams = {
        user_id: userId,
        event_id: eventId
    };
    this.props.createRsvp(rsvpParams);
  }

  renderButton() {
    let buttonText;
    if (this.props.event.attendees) {
      if ( this.props.currentUser ) {
        const eventMembers = this.props.event.attendees;
        if ( eventMembers.includes(this.props.currentUser.id) ) {
          buttonText = "Cancel";
          return (
            <button
              className="group-show-button"
              onClick={this.deleteRsvp}>{buttonText}</button>
          );
        }
      }
    }
    buttonText = "RSVP";
    return (
      <button
       className="group-show-button"
       onClick={this.handleSubmit}
       >{buttonText}</button>
    );
  }

  render() {
    let attendees;
    if (this.props.event) {
      if (this.props.event.attendees) {
        attendees = this.props.event.attendees.map( (attendee) => {
          return (
            <li key={attendee}>{attendee}</li>
          );
        });
      } else {
        attendees = [];
      }
    }
    if (this.props.event) {
      return (
        <div>
          <h1>{this.props.event.name}</h1>
          <p>{this.props.event.description}</p>
          <p>{this.props.event.location}</p>
          <p>{this.props.event.date}</p>
          <p>{this.props.event.time}</p>
          {this.renderButton()}
          <ul>
            {attendees}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(EventShow);
