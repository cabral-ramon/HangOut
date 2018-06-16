import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchEvents(this.props.userId);
  }


  render() {
    const eventIndexItems = Object.values(this.props.events).map ( (event) => {
      let group = this.props.groups[event.group_id];
      if (group) {
        return (
          <EventIndexItem event={event} group={group} key={event.id}/>
        );
      } else {
        return null;
      }
    });
    return(
      <div>
        <ul className="event-index-container">
          {eventIndexItems}
        </ul>
      </div>
    );
  }

}

export default EventIndex;
