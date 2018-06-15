import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import GroupMembers from './../GroupMembers/group_members_container';
import UpcomingEventsSideBar
from './../../event/UpcomingEventsSidebar/upcoming_events_sidebar';

const GroupAbout = ({events, members, group}) =>  {
    return (
      <article className="group-about-wrapper">
        <div id="about-container-wrapper">
          <div id="about-container">
            <Typography variant="display1" gutterBottom>
              About this Hangout:
            </Typography>
            <Typography variant="body1" align='left'>
              {group.description}
            </Typography>
          </div>
          <GroupMembers members={members} />
        </div>
        <UpcomingEventsSideBar events={events} groupId={group.id}/>
      </article>
    );
};

export default GroupAbout;
