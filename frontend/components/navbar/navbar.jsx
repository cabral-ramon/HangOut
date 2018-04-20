import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  userIcon() {
    if (this.props.currentUser !== null) {
      console.log(this.props);
      return (
        <div>
          <i className="fas fa-bars"></i>
          <div className="navbar-user-container">
              <Link to={'/create'} className="navbar-links">Create a Hangout</Link>
            <button
              onClick={this.props.logout}
              className="logout-button">Log Out</button>
            <div id="user-image" style={{backgroundImage: `url(${this.props.currentUser.image})`}}>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i className="fas fa-bars"></i>
          <div className="navbar-user-container">
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
