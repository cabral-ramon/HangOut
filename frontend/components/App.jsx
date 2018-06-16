
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import NavBar from './navbar/navbar_container';
import GroupIndexContainer from './groups/group_index_container';
import GroupFormContainer from './groups/GroupForm/group_form_container';
import GroupShowContainer from './groups/group_show_container';
import EventShowContainer from './event/event_show_container';
import EventIndexContainer from './event/event_index_container';
import HomepageContainer from './homepage/homepage_container';
import Video from './video/video';
import Footer from './footer/footer';

const App = () => (
  <main>
    <header>
      <NavBar />
    </header>

    <Switch>
      <Route path="/login" component={SessionFormContainer}/>
      <Route path="/signup" component={SessionFormContainer}/>
      <Route path="/create" component={GroupFormContainer}/>
      <Route path="/events/:eventId" component={EventShowContainer}/>
      <Route path="/groups/:groupId" component={GroupShowContainer}/>
      <Route exact path="/homepage" component={HomepageContainer}/>
    </Switch>

      <Route path="/homepage/groups" render={() => {
          return (
            <GroupIndexContainer homepage={true} />
          );
        }}/>
      <Route path="/homepage/myevents" render={() => {
          return (
            <EventIndexContainer homepage={true} />
          );
        }}/>
      <Route exact path="/" component={Video}/>
      <Route path="/login" component={Video}/>
      <Route path="/signup" component={Video}/>
      <Route exact path="/" component={GroupIndexContainer}/>


    <Footer />
  </main>
);

export default App;
