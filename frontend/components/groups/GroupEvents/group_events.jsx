import React from 'react';
import { withRouter } from 'react-router-dom';

import EventFormContainer from '../../event/event_form_container';
import GroupEventList from './group_event_list';

const GroupEvents = ({ events }) => {
  return (
    <div className="event-container" style={{width: '100%'}}>
      <div className="group-events-container">
        <div id="group-events-head" >
          <div>
            <h3>Events:</h3>
          </div>
          <EventFormContainer />
        </div>
        <GroupEventList events={events} />
      </div>
    </div>
  );
}

export default withRouter(GroupEvents);
