import React from 'react';
import { withRouter } from 'react-router-dom';
import EventForm from '../event/event_form_container';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  renderMembers() {
    return (
      <ul>
        {this.props.members.map( (member) => (
          <li key={member.id}>{member.username}</li>
        ))}
      </ul>
    );
  }

  leaveGroup(e) {
    e.preventDefault();
    const groupId = this.props.group.id;
    this.props.removeMembership(groupId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const groupId = this.props.group.id;
    const userId = this.props.currentUser.id;
    const membership = Object.assign({}, { group_id: groupId, user_id: userId});
    this.props.createMembership(membership);
  }

  renderEventForm() {
    return(
      <EventForm />
    );
  }

  renderButton() {
    let buttonText;
    const groupMembers = this.props.memberIds;
    if ( this.props.currentUser ) {
      if ( groupMembers.includes(this.props.currentUser.id) ) {
        buttonText = "Leave Group";
        return (
          <button
            className="group-show-button"
            onClick={this.leaveGroup}>{buttonText}</button>
        );
      }
    }
    buttonText = "Join Group";
    return (
      <button
       className="group-show-button"
       onClick={this.handleSubmit}
       >{buttonText}</button>
    );
  }



  render() {
    if (this.props.group) {
      return (

        <div className="group-show-main">
          <div className="group-show-container">
            <section className="group-show-image-container">
              <img className="group-show-image"
                src={this.props.group.image}/>
              <div className="group-info-container">
                <h2 className="group-show-name">
                  {this.props.group.name}</h2>
                <p>{this.props.group.location}</p>
                {this.renderButton()}
              </div>
            </section>
            <section className="group-show-section">
              <article>
                <h2>About this Hangout:</h2>
                <p>{this.props.group.description}</p>
              </article>

              <aside className="members-container">

                <h3><span>({this.props.memberIds.length})</span> Members</h3>
                {this.renderMembers()}
              </aside>
            </section>
            <div className="event-contain">
              <EventForm groupId={this.props.group.id}/>
            </div>
            <div className="group-events-container">
              <h3>Events:</h3>
              <ul>
                {this.props.events.map( (event) => (
                  <li key={event.id}>
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
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(GroupShow);
