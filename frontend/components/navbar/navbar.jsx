import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  userIcon() {
    if (this.props.currentUser !== null) {
      return (
      <div>
        <p>{this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
      );
    } else {
      return (
        <div>
          <Link to={`/login`}>Login</Link>
          <Link to={`/signup`}>signup</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <h1>HangOut</h1>
        {this.userIcon()}
      </nav>
    );
  }

}
export default NavBar;
