import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';

const Video = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        className="video"
        loop="yes">
        <source src="https://meetup.com/mu_static/en-US/video.dddafbfe.mp4" />
      </video>
      <div className="video-text">
        <h3>What do you love?</h3>
        <p>do more of it with Hangout</p>
          <SessionFormContainer formType="signup" id="2"/>
      </div>
    </div>
  );
};

export default Video;
