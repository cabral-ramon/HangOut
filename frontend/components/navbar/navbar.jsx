import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';
import Avatar from '@material-ui/core/Avatar';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('#hamburger').click(function(){
        $('.navbar-user-container').slideToggle("slow");
        console.log("hits");
      });
    });
  }

  userIcon() {
    if (this.props.currentUser !== null) {
      return (
        <div>
          <i id="hamburger" className="fas fa-bars"></i>
          <div className="navbar-user-container">
              <Link to={'/create'} className="navbar-links create-btn">
                Create a Hangout
              </Link>
            <button
              onClick={this.props.logout}
              className="logout-button">Log Out</button>
            <Avatar
              style={
                {
                  width: 60,
                  height: 60,
                }}
              src={this.props.currentUser.image}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i id="hamburger" className="fas fa-bars"></i>
          <div className="navbar-user-container">
            <Link to={'/create'} className="navbar-links create-btn">
              Create a Hangout
            </Link>
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
