import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-container">
        <div className="github">
        <a target="_blank" href="https://github.com/cabral-ramon">
          <i class="fab fa-github"></i>
        </a>
        </div>

        <div className="linkedin">
          <a target="_blank" href="https://www.linkedin.com/in/cabral-ramon/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }

}

export default Footer;
