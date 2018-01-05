
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import NavBar from './navbar/navbar_container';
import GroupIndexContainer from './groups/group_index_container';
import GroupFormContainer from './groups/group_form_container';
import GroupShowContainer from './groups/group_show_container';
import Video from './video/video';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
    <Video />
    <Route path="/create" component={GroupFormContainer}/>
    <Route path="/" component={GroupIndexContainer}/>
    <Route path="/groups/:groupId" component={GroupShowContainer}/>
  </div>
);

export default App;
