import React from 'react';
import { Link } from 'react-router-dom';

class GroupComments extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.comments) {
      return (
        <div className="event-container">
          <div className="group-events-container">
            <h3>Comments:</h3>
            <ul>
              {this.props.comments.map( (comment) => (
                <li key={comment.id}>
                  <div className="event-list-container">
                    <article className="event-list-desc">
                      {comment.body}
                    </article>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default GroupComments;
