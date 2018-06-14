import React from 'react';
import { withRouter } from 'react-router-dom';
import EventForm from '../event/event_form_container';
import { Link, Route } from 'react-router-dom';
import GroupEventsContainer from './GroupEvents/group_events_container';
import GroupCommentsContainer from './GroupComments/group_comments_container';
import GroupAboutContainer from './GroupAbout/group_about_container';
import GroupMembersContainer from './GroupMembers/group_members_container';
import GroupEditContainer from './group_edit_container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
    this.renderEventForm = this.renderEventForm.bind(this);
    this.showEvents = this.showEvents.bind(this);
    this.showComments = this.showComments.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showMembers = this.showMembers.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.renderEditButton = this.renderEditButton.bind(this);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
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

  showMembers(){
    this.props.history.push(`/groups/${this.props.group.id}/members`);
  }

  showEditForm(){
    this.props.history.push(`/groups/${this.props.group.id}/edit`);
  }

  renderEditButton(){
    if(this.props.isOwner) {
      return (
        <Tab label="Edit" onClick={this.showEditForm}/>
      );
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(this.props.groupId).then( (response)=> {
      this.props.history.push('/homepage');
    });
  }
  renderDeleteButton(){
    if(this.props.isOwner) {
      return (
        <Tab label="Delete" onClick={this.handleDelete}/>
      );
    }
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

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
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Group" onClick={this.showAbout}/>
                <Tab label="Hangouts" onClick={this.showEvents}/>
                <Tab label="Discussions" onClick={this.showComments}/>
                <Tab label="Members" onClick={this.showMembers}/>
                {this.renderEditButton()}
                {this.renderDeleteButton()}
              </Tabs>
            </nav>
            <section className="group-show-section">
              <Route exact path="/groups/:id" component={GroupAboutContainer} />
              <Route exact path="/groups/:id/events" component={GroupEventsContainer} />
              <Route exact path="/groups/:id/comments" component={GroupCommentsContainer} />
              <Route exact path="/groups/:id/members" component={GroupMembersContainer} />
              <Route exact path="/groups/:id/edit" render={()=> <GroupEditContainer group={this.props.group}/>}/>
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
