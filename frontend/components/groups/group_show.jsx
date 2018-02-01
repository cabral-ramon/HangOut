import React from 'react';
import { withRouter } from 'react-router-dom';
import EventForm from '../event/event_form_container';
import { Link, Route } from 'react-router-dom';
import GroupEventsContainer from './group_events_container';
import GroupCommentsContainer from './group_comments_container';
import GroupAboutContainer from './group_about_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
    this.renderEventForm = this.renderEventForm.bind(this);
    this.showEvents = this.showEvents.bind(this);
    this.showComments = this.showComments.bind(this);
    this.showAbout = this.showAbout.bind(this);
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
    this.joinButtonClicked = true;
    if (this.props.currentUser) {
      const groupId = this.props.group.id;
      const userId = this.props.currentUser.id;
      const membership = Object.assign({}, { group_id: groupId, user_id: userId});
      this.props.createMembership(membership);
    } else {
      window.alert("Please log in to join a group.");
    }
  }

  renderEventForm(){
    if (this.props.currentUser && this.props.memberIds.includes(this.props.currentUser.id)) {
      return (
        <EventForm groupId={this.props.groupId}/>
      );
    }
  }

  renderButton() {
    let buttonText;
    if ( this.props.currentUser ) {
      if ( this.props.memberIds.includes(this.props.currentUser.id) ) {
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

  showEvents(){
    this.props.history.push(`/groups/${this.props.group.id}/events`);
  }
  showComments(){
    this.props.history.push(`/groups/${this.props.group.id}/comments`);
  }
  showAbout(){
    this.props.history.push(`/groups/${this.props.group.id}`);
  }

  render() {
    if (this.props.group) {
      return (

        <div className="group-show-main">
          <Link
            to="/homepage"
            className="back-to-link">back to Homepage</Link>
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
            <nav className="group-show-menu-container">
              <ul className="group-show-menu">
                <li>
                  <button onClick={this.showAbout}>Group</button>
                </li>
                <li>
                    <button onClick={this.showEvents}>Events</button>
                </li>
                <li>
                    <button onClick={this.showComments}>Discussions</button>
                </li>

              </ul>
            </nav>
            <section className="group-show-section">
              <Route exact path="/groups/:id" component={GroupAboutContainer} />
              <Route exact path="/groups/:id/events" component={GroupEventsContainer} />
              <Route exact path="/groups/:id/comments" component={GroupCommentsContainer} />
              <aside className="members-container">
                <h3><span>({this.props.memberIds.length})</span> Members</h3>
                {this.renderMembers()}
              </aside>
            </section>

        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(GroupShow);
