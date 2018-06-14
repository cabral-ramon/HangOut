import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { dateToDayMonth, dateToWordDate } from '../../util/date_converter';
import GroupMembersContainer from '../groups/GroupMembers/group_members_container';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRsvp = this.deleteRsvp.bind(this);
    this.renderDayMonth = this.renderDayMonth.bind(this);
    this.renderWordDate = this.renderWordDate.bind(this);
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
    if (this.props.currentUser != null) {
      const eventId = this.props.eventId;
      const userId = this.props.currentUser.id;
      const rsvpParams = {
        user_id: userId,
        event_id: eventId
      };
      this.props.createRsvp(rsvpParams);
    } else {
      alert("You must login before you can RSVP to an Event.");
    }
  }

  renderButton() {
    let buttonText;
    if ( this.props.currentUser ) {
      if ( this.props.eventMembers.map( m => m.id ).includes( this.props.currentUser.id) ) {
        buttonText = "Cancel";
        return (
          <button
            className="event-rsvp-btn"
            onClick={this.deleteRsvp}>{buttonText}</button>
        );
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

  renderDayMonth(){
    if(this.props.event.date) {
      return (
        <div id="event-show-date">
          <p id="event-show-day">{dateToDayMonth(this.props.event.date).slice(0,2)}</p>
          <p id="event-show-month">{dateToDayMonth(this.props.event.date).slice(2,5)}</p>
        </div>
      );
    }
    return null;
  }

  renderWordDate(){
    if(this.props.event.date) {
      return (
        <span>{dateToWordDate(this.props.event.date)}</span>
      );
    }
    return null;
  }

  render() {
    let rsvps;
    if (this.props.event) {
      if (this.props.eventMembers) {
        rsvps = this.props.eventMembers.map( (member, idx) => {
          return (
            <li key={idx}
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
                <div id="event-show-date-wrapper">
                  {this.renderDayMonth()}
                </div>
                <div className="event-show-name">
                  {this.renderWordDate()}
                  <h1>{this.props.event.name}</h1>
                  <p>Hosted by {this.props.organizer.username}</p>
                  <p>From <Link className="general-link"
                    to={`/groups/${this.props.group.id}`}>{this.props.group.name}</Link></p>
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
              <div id="event-show-attendees">
                <h1>Attendees</h1>
                <ul className="event-show-ul">
                  {rsvps}
                </ul>
              </div>
            </div>
            <div className="event-show-time-location">
              <div>
                <div id="event-show-time">
                  <i className="far fa-clock"></i>
                  <p>{this.renderWordDate()}</p>
                </div>
                <div>
                  <p>{this.props.event.time}</p>
                </div>
              </div>
              <div id="event-show-location">
                <i className="fas fa-map-marker-alt"></i>
                <p>{this.props.event.location}</p>
              </div>
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
