import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import NavBar from '../navbar/navbar_container';
import GroupIndexContainer from '../groups/group_index_container';
import EventIndexContainer from '../event/event_index_container';
import { merge } from 'lodash';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.updateSearchBar = this.updateSearchBar.bind(this);
    this.searchGroups = this.searchGroups.bind(this);
  }

  chooseClassName(url) {
    if (this.props.location.pathname === url) {
      return "homepage-btn selected";
    }

    return "homepage-btn";
  }

  searchGroups(e){
    e.preventDefault();
    this.props.searchGroups(this.state);
  }

  updateSearchBar() {
    return (e) => {
      this.setState(merge({}, this.state, {group: {query: e.currentTarget.value}}));
    };
  }

  render() {
    return (
    <main>
      <div className="homepage-search-container">
        <h1>Find a Hangout</h1>
        <div className="homepage-btn-wrapper">
          <div className="homepage-btn-container">
            <div className="search-bar-container">
              <form onSubmit={this.searchGroups}>
                <input type="search"
                  className="search-bar"
                  placeholder="Search by groups..."
                  onChange={this.updateSearchBar()}
                  ></input>
              </form>
            </div>
            <div className="homepage-btn-list-wrapper">
              <ul className="homepage-btn-list">
                <li>
                  <Link to="/homepage"
                    className={this.chooseClassName('/homepage')}
                    >Groups</Link>
                </li>
                <li>
                  <Link to="/homepage/events"
                    className={this.chooseClassName('/homepage/events')}
                    >Events</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Route exact path="/homepage" component={GroupIndexContainer}/>
      <Route path="/homepage/events" component={EventIndexContainer} />
    </main>
    );
  }

}


export default withRouter(Homepage);
