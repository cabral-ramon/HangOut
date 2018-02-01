import React from 'react';
import { Link } from 'react-router-dom';

class GroupAbout extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.group) {
      return (
        <article>
          <h2>About this Hangout:</h2>
          <p>{this.props.group.description}</p>
        </article>
      );
    } else {
      return null;
    }
  }

}

export default GroupAbout;
