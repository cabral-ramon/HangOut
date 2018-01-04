
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import NavBar from './navbar/navbar_container';
import Groups from './groups/group_index_container';
import GroupFormContainer from './groups/group_form_container';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
    <Route path="/create" component={GroupFormContainer}/>
    <div className="video-container">
      <video
        src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
        autoPlay="yes"
        className="video"
        loop="yes" data-vscid="cgnslx2fk"></video>
      <div className="video-text">
        <h3>What do you love?</h3>
        <p>do more of it with Hangout</p>
        <Link to={'/signup'} 
          className="video-signup-btn">Sign up</Link>
      </div>
     </div>
    <Groups />
  </div>
);

export default App;
