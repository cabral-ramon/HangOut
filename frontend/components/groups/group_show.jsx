import React from 'react';
import { withRouter } from 'react-router-dom';
import EventForm from '../event/event_form_container';
import { Link, Route } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import GroupEvents from './GroupEvents/group_events';
import GroupCommentsContainer from './GroupComments/group_comments_container';
import GroupAbout from './GroupAbout/group_about';
import GroupMembersContainer from './GroupMembers/group_members_container';
import GroupEditContainer from './group_edit_container';
import AlertModal from '../common/AlertModal';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      alertError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
    this.renderEventForm = this.renderEventForm.bind(this);
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
    if (this.props.currentUser) {
      const groupId = this.props.group.id;
      const userId = this.props.currentUser.id;
      const membership = Object.assign(
        {},
        { group_id: groupId, user_id: userId }
      );
      this.props.createMembership(membership);
    } else {
      this.setState({ alertError: true });
    }
  }

  renderEventForm() {
    if (
      this.props.currentUser &&
      this.props.memberIds.includes(this.props.currentUser.id)
    ) {
      return <EventForm groupId={this.props.groupId} />;
    }
  }

  renderButton() {
    let buttonText;
    if (this.props.currentUser) {
      if (this.props.memberIds.includes(this.props.currentUser.id)) {
        buttonText = 'Leave Group';
        return (
          <button className="group-show-button" onClick={this.leaveGroup}>
            {buttonText}
          </button>
        );
      }
    }
    buttonText = 'Join Group';
    return (
      <button className="group-show-button" onClick={this.handleSubmit}>
        {buttonText}
      </button>
    );
  }

  showSection(section) {
    this.props.history.push(
      `/groups/${this.props.group.id}/${section ? section : ''}`
    );
  }

  showEditForm() {
    this.props.history.push(`/groups/${this.props.group.id}/edit`);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(this.props.groupId).then(response => {
      this.props.history.push('/homepage');
    });
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  handleModalClose() {
    this.setState({ alertError: false });
  }

  render() {
    const { value, alertError } = this.state;

    if (this.props.group) {
      return (
        <div className="group-show-main">
          {alertError && (
            <AlertModal
              open={true}
              handleClose={this.handleModalClose.bind(this)}
            />
          )}
          <Link to="/homepage" className="back-to-link">
            back to Homepage
          </Link>
          <div className="group-show-container">
            <section className="group-show-image-container">
              <img className="group-show-image" src={this.props.group.image} />
              <div className="group-info-container">
                <h2 className="group-show-name">{this.props.group.name}</h2>
                <p>{this.props.group.location}</p>
                {this.renderButton()}
              </div>
            </section>
            <nav className="group-show-menu-container">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab
                  label="Group"
                  onClick={this.showSection.bind(this, null)}
                />
                <Tab
                  label="Hangouts"
                  onClick={this.showSection.bind(this, 'events')}
                />
                <Tab
                  label="Discussions"
                  onClick={this.showSection.bind(this, 'comments')}
                />
                <Tab
                  label="Members"
                  onClick={this.showSection.bind(this, 'members')}
                />
                {this.props.isOwner && (
                  <Tab label="Edit" onClick={this.showEditForm.bind(this)} />
                )}
                {this.props.isOwner && (
                  <Tab label="Delete" onClick={this.handleDelete.bind(this)} />
                )}
              </Tabs>
            </nav>
            <section className="group-show-section">
              <Route
                exact
                path="/groups/:id"
                render={() => (
                  <GroupAbout
                    members={this.props.members}
                    group={this.props.group}
                    events={this.props.events}
                  />
                )}
              />
              <Route
                exact
                path="/groups/:id/events"
                render={() => <GroupEvents events={this.props.events} />}
              />
              <Route
                exact
                path="/groups/:id/comments"
                component={GroupCommentsContainer}
              />
              <Route
                exact
                path="/groups/:id/members"
                component={GroupMembersContainer}
              />
              <Route
                exact
                path="/groups/:id/edit"
                render={() => <GroupEditContainer group={this.props.group} />}
              />
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
