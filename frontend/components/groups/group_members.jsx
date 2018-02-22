import React from 'react';
import { Link } from 'react-router-dom';

class GroupMembers extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.members) {
      return (
        <div className="members-container">
              <h3><span>({this.props.members.length})</span> Members:</h3>
            <ul className="members-ul">
              {this.props.members.map( (member) => (
                <li key={member.id} className="member-wrapper">
                  <div className="member-container">
                    <div id="member-image-container">
                      <img src={member.image}/>
                    </div>
                    <h3 className="member-username">{member.username}</h3>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default GroupMembers;
