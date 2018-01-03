import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  userIcon() {
    if (this.props.currentUser !== null) {
      return (
      <div className="navbar-user-container">
        <button
          onClick={this.props.logout}
          className="logout-button">Log Out</button>
        <h3 className="username">{this.props.currentUser.username}</h3>
      </div>
      );
    } else {
      return (
        <div className="navbar-links-container">
          <a href="">Create a Hangout</a>
          <Link to={`/login`} className="navbar-links">Login</Link>
          <Link to={`/signup`} className="navbar-links">signup</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="logo">HangOut</h1>
        {this.userIcon()}
      </nav>
    );
  }

}
export default NavBar;
