import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.events;

  }

  componentDidMount() {
    this.props.fetchEvents();
  }


  render() {
    const eventIndexItems = Object.values(this.props.events).map ( (event) => {
      return (
        <EventIndexItem event={event} key={event.id}/>
      );
    });
    return(
      <ul className="event-index-container">
        {eventIndexItems}
      </ul>
    );
  }

}

export default EventIndex;
