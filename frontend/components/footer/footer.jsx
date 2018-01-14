import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-container">
        <div className="github">
        <a target="_blank" href="https://github.com/cabral-ramon">
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
        </div>

        <div className="linkedin">
          <a target="_blank" href="https://www.linkedin.com/in/cabral-ramon/">
            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }

}

export default Footer;
