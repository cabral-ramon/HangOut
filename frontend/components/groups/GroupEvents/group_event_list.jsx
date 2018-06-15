import React from 'react';
import GroupEventItem from './group_event_item';

const GroupEventList = ({ events }) => (
  <ul style={{marginTop: '20px'}}>
    {events.map( (event) => (
      <GroupEventItem key={event.id} event={event}/>
    ))}
  </ul>
);

export default GroupEventList;
