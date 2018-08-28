import React from "react";
import { Link, withRouter } from "react-router-dom";
import SessionFormContainer from "../session/session_form_container";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMenuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
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
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
      anchorEl: null
    });
  }

  renderHomePageNav() {
    if (
      this.props.currentUser &&
      this.props.history.location.pathname === "/homepage"
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

  handleBurgerClick() {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  }

  userIcon() {
    const { anchorEl, mobileMenuOpen } = this.state;
    const open = mobileMenuOpen ? " open-menu" : "";
    if (this.props.currentUser !== null) {
      return (
        <div className="navbar-menu-wrapper">
          <div className={"navbar-user-container" + open}>
            <Link
              id="create-hangout-link"
              to={"/create"}
              className="navbar-links create-btn"
            >
              Create a Hangout
            </Link>
            <Avatar
              id="avatar"
              style={{ width: 60, height: 60 }}
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
            <div id="responsive-menu">
              <Link to={"/create"} onClick={this.handleClose}>
                Create a Hangout
              </Link>
              <Link to="/homepage" onClick={this.handleClose}>
                Homepage
              </Link>
              <Link to="/homepage/myevents" onClick={this.handleClose}>
                My Events
              </Link>
              <Link to="/homepage/groups" onClick={this.handleClose}>
                My Groups
              </Link>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-menu-wrapper">
          <div className={"navbar-user-container" + open}>
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
        <div className="navbar">
          <h1 className="logo">{this.renderHomePageNav()}</h1>
          <i
            id="hamburger"
            className="fas fa-bars"
            onClick={this.handleBurgerClick}
          />
        </div>
        {this.userIcon()}
      </nav>
    );
  }
}
export default withRouter(NavBar);
