import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class GroupMembers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.members) {
      return (
        <div className="members-container">
              <h3>
                <span>({this.props.members.length})</span>
                { this.props.title ? this.props.title : 'Members:'}
              </h3>
            <ul className="members-ul">
              {this.props.members.map( (member) => (
                <li key={member.id} className="member-wrapper">
                  <Avatar alt={member.username} src={member.image}
                    style={{
                      width: 60,
                      height: 60,
                      alignSelf: 'center'
                    }}
                  />
                  <Typography variant="subheading">
                    {member.username}
                  </Typography>
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
