import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import GroupMembers from './../GroupMembers/group_members_container';
import UpcomingEventsSideBar from './../../event/UpcomingEventsSideBar';

class GroupAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.group) {
      this.props.fetchGroup(this.props.groupId);
    }
  }

  render() {
    if (this.props.group) {
      return (
        <article className="group-about-wrapper">
          <div id="about-container-wrapper">
            <div id="about-container">
              <Typography variant="display1" gutterBottom>
                About this Hangout:
              </Typography>
              <Typography variant="body1" align='left'>
                {this.props.group.description}
              </Typography>
            </div>
            <GroupMembers members={this.props.members} />
          </div>
          <UpcomingEventsSideBar events={this.props.events} groupId={this.props.group.id}/>
        </article>
      );
    } else {
      return null;
    }
  }

}

export default GroupAbout;
