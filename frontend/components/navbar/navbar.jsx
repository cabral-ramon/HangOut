import React from "react";
import { Link, withRouter } from "react-router-dom";
import SessionFormContainer from "../session/session_form_container";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderHomePageNav = this.renderHomePageNav.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }
  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleLogout() {
    this.props.logout();
    this.handleClose();
  }

  componentDidMount() {
    $(document).ready(function() {
      $("#hamburger").click(function() {
        $(".navbar-user-container").slideToggle("slow");
      });
    });
  }

  renderHomePageNav() {
    if (
      this.props.currentUser &&
      this.props.history.location.pathname == "/homepage"
    ) {
      return (
        <Link to="/homepage" replace={true}>
          HangOut
        </Link>
      );
    } else if (this.props.currentUser) {
      return <Link to="/homepage">HangOut</Link>;
    } else {
      return (
        <Link to="/" replace>
          HangOut
        </Link>
      );
    }
  }

  userIcon() {
    if (this.props.currentUser !== null) {
      const { anchorEl } = this.state;
      return (
        <div>
          <i id="hamburger" className="fas fa-bars" />
          <div className="navbar-user-container">
            <Link to={"/create"} className="navbar-links create-btn">
              Create a Hangout
            </Link>
            <Avatar
              style={{
                width: 60,
                height: 60
              }}
              src={this.props.currentUser.image}
              onClick={this.handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              style={{ top: "20px" }}
            >
              <Link to="/homepage">
                <MenuItem onClick={this.handleClose}>Homepage</MenuItem>
              </Link>
              <Link to="/homepage/myevents">
                <MenuItem onClick={this.handleClose}>My Events</MenuItem>
              </Link>
              <Link to="/homepage/groups">
                <MenuItem onClick={this.handleClose}>My Groups</MenuItem>
              </Link>
              <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i id="hamburger" className="fas fa-bars" />
          <div className="navbar-user-container">
            <Link to={"/create"} className="navbar-links create-btn">
              Create a Hangout
            </Link>
            <SessionFormContainer formType="Login" id="0" />
            <SessionFormContainer formType="signup" id="1" />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="logo">{this.renderHomePageNav()}</h1>
        {this.userIcon()}
      </nav>
    );
  }
}
export default withRouter(NavBar);
