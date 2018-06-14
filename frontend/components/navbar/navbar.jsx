import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event){
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
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
      const { anchorEl } = this.state;
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
                onClick={this.handleClick}
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  style={{top: '45px'}}
                >
                  <MenuItem onClick={this.handleClose}>My Events</MenuItem>
                  <MenuItem onClick={this.handleClose}>My Gruops</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
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
