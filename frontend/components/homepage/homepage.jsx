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

  render() {

    return (
    <main>
      
      <GroupIndexContainer />
      <Route path="/homepage/events" component={EventIndexContainer} />
    </main>
    );
  }

}


export default withRouter(Homepage);
