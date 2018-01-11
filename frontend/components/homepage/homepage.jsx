import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import NavBar from '../navbar/navbar_container';
import GroupIndexContainer from '../groups/group_index_container';
import EventIndexContainer from '../event/event_index_container';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseClassName(url) {
    if (this.props.location.pathname === url) {
      return "homepage-btn selected";
    }

    return "homepage-btn";
  }

  render() {
    return (
    <main>
      <div className="homepage-search-container">
        <h1>Find a Hangout</h1>
        <ul className="homepage-btn-container">
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
      <Route exact path="/homepage" component={GroupIndexContainer}/>
      <Route path="/homepage/events" component={EventIndexContainer} />
    </main>
    );
  }

}


export default withRouter(Homepage);
