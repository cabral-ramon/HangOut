import React from "react";
import Typography from "@material-ui/core/Typography";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="github">
          <a target="_blank" href="https://github.com/cabral-ramon">
            <i className="fab fa-github" />
          </a>
        </div>

        <div className="linkedin">
          <a target="_blank" href="https://www.linkedin.com/in/cabral-ramon/">
            <i className="fab fa-linkedin" />
          </a>
        </div>

        <div style={{ color: "white" }}>
          <Typography color="inherit" variant="body1">
            Website Created by{" "}
            <a
              style={{ color: "cadetblue" }}
              target="_blank"
              href="https://cabral-ramon.github.io/"
            >
              Ramon Cabral
            </a>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Footer;
