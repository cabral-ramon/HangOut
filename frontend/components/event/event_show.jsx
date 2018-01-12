import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRsvp = this.deleteRsvp.bind(this);
  }



  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
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
    if (this.props.rsvps) {
      if ( this.props.currentUser && this.props.eventMembers ) {
        const eventMembers = this.props.rsvps;
        if ( eventMembers.includes( this.props.currentUser.id) ) {
          buttonText = "Cancel";
          return (
            <button
              className="event-rsvp-btn"
              onClick={this.deleteRsvp}>{buttonText}</button>
          );
        }
      }
    }
    buttonText = "RSVP";
    return (
      <button
       className="event-rsvp-btn"
       onClick={this.handleSubmit}
       >{buttonText}</button>
    );
  }

  render() {
    let rsvps;
    if (this.props.event) {
      if (this.props.eventMembers) {
        rsvps = this.props.eventMembers.map( (member) => {
          return (
            <li key={member.id}
              className="event-show-rsvp-list">{member.username}</li>
          );
        });
      } else {
        rsvps = [];
      }
    }
    if (this.props.event) {
      return (
        <div className="event-show-container">
          <div className="event-show-head-wrapper">
            <Link
              to="/homepage/events"
              className="back-to-link">back to Events</Link>
            <div className="event-show-head">
              <div className="page-head">
                <div className="event-show-date">
                </div>
                <div className="event-show-name">
                  <p>{this.props.event.date}</p>
                  <h1>{this.props.event.name}</h1>
                  <p>Hosted by <Link to="">{this.props.group.name}</Link></p>
                </div>
                <div className="event-rsvp-wrapper">
                  {this.renderButton()}
                </div>
              </div>
            </div>
          </div>
          <div className="event-show-body-wrapper">
            <div className="event-show-details">
              <h1>Details</h1>
              <p>{this.props.event.description}</p>
              <h1>Attendees</h1>
              <ul className="event-show-ul">
                {rsvps}
              </ul>
            </div>
            <div className="event-show-time-location">
              <p>{this.props.event.time}</p>
              <p>Location: {this.props.event.location}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(EventShow);
