import React from 'react';
import { Link } from 'react-router-dom';

const Video = () => {
  return (
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
  );
};

export default Video;
