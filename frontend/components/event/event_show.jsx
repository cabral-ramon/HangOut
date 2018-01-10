import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.event.name}</h1>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.location}</p>
        <p>{this.props.event.date}</p>
        <p>{this.props.event.time}</p>
      </div>
    );
  }

}

export default withRouter(EventShow);
