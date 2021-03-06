import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import GroupIndexContainer from "../groups/group_index_container";
import EventIndexContainer from "../event/event_index_container";
import { merge } from "lodash";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      spinner: false
    };
    this.updateSearchBar = this.updateSearchBar.bind(this);
    this.searchGroups = this.searchGroups.bind(this);
    this.renderCount = this.renderCount.bind(this);
  }

  chooseClassName(url) {
    if (this.props.location.pathname === url) {
      return "homepage-btn selected";
    }

    return "homepage-btn";
  }

  searchGroups(e) {
    e.preventDefault();
    this.setState({ spinner: true });
    this.props.searchGroups(this.state).then(() => {
      this.setState({ spinner: false });
    });
  }

  updateSearchBar() {
    return e => {
      this.setState(
        merge({}, this.state, { group: { query: e.currentTarget.value } })
      );
    };
  }

  renderCount() {
    if (this.props.location.pathname == "/homepage/events") {
      return `${this.props.events.length} Events`;
    } else {
      return `${this.props.groups.length} Groups`;
    }
  }

  render() {
    return (
      <main>
        <div className="homepage-search-container">
          <h1>Find a Hangout</h1>
          <p className="homepage-count">{this.renderCount()} Available</p>
          <div className="homepage-btn-wrapper">
            <div className="homepage-btn-container">
              <div className="search-bar-container">
                <form onSubmit={this.searchGroups}>
                  <input
                    type="search"
                    className="search-bar"
                    placeholder="Search by groups..."
                    onChange={this.updateSearchBar()}
                  />
                </form>
              </div>
              <div className="homepage-btn-list-wrapper">
                <ul className="homepage-btn-list">
                  <li>
                    <Link
                      to="/homepage"
                      className={this.chooseClassName("/homepage")}
                    >
                      Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/homepage/events"
                      className={this.chooseClassName("/homepage/events")}
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Route exact path="/homepage" component={GroupIndexContainer} />
        <Route path="/homepage/events" component={EventIndexContainer} />
      </main>
    );
  }
}

export default withRouter(Homepage);
