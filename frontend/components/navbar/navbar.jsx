import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  userIcon() {
    if (this.props.currentUser !== null) {
      return (
        <div>
          <i class="fas fa-bars"></i>
          <div className="navbar-user-container">
            <Link to={'/create'} className="navbar-links">Create a Hangout</Link>
            <button
              onClick={this.props.logout}
              className="logout-button">Log Out</button>
            <h3 className="username">{this.props.currentUser.username}</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i className="fas fa-bars"></i>
          <div className="navbar-links-container">
            <Link to={'/create'} className="navbar-links">Create a Hangout</Link>
            <SessionFormContainer formType="Login" id="0"/>
            <SessionFormContainer formType="signup" id="1"/>
          </div>
        </div>
      );
    }
  }


  render() {
    return (
      <nav className="navbar">
        <h1 className="logo"><Link
          to={this.props.currentUser ? "/homepage" : "/"}>
          HangOut
        </Link>
      </h1>
        {this.userIcon()}
      </nav>
    );
  }

}
export default NavBar;
