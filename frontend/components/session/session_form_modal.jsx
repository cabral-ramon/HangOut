import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SessionFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      credentials: {
        username: "",
        password: "",
        location: "",
        email: ""
      }
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
    return (e) => this.setState(merge({}, this.state, {credentials: {[field]: e.currentTarget.value}}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () => {
      this.props.history.push("/homepage");
    });
  }

  demoLogin() {
    this.props.guestLogin({
      username: 'Guest User',
      password: 'password'
    }).then( () => {
      this.props.history.push("/homepage");
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  modalButtonRender() {
    if (this.props.id === "2"){
      return (
        <button onClick={this.openModal}
          className="video-signup-btn">{title}</button>
      );
    } else {
      let title = this.props.formType === "signup" ? "Sign up" : "Log in";
      return (
        <button onClick={this.openModal}
          className="navbar-links">{title}</button>
      );
    }
  }

  render() {
    const buttonText = this.props.formType === "signup" ? "Sign up" : "Log in";
    let signupInputs;
    let title;

    if (this.props.formType === "signup") {
       title = "Sign Up";
       signupInputs = (
        <div className="session-element">
          <label>email
            <input
              type="text"
              value={this.state.credentials.email}
              onChange={this.update('email')}
              className="session-input"/>
          </label>

          <label>location
            <input
              type="text"
              value={this.state.credentials.location}
              onChange={this.update('location')}
              className="session-input"/>
          </label>
        </div>
      );
    } else {
      title = "Log in";
    }
    let buttonClass = this.props.id === "2" ? "video-signup-btn" : "navbar-links";
    return (
      <div>
        <button onClick={this.openModal}
          className={buttonClass}>{title}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="session-form-header">
          <h2 ref={subtitle => this.subtitle = subtitle}
            className="event-form-header">{title}</h2>
          <button onClick={this.closeModal}>close</button>
        </div>
              <form onSubmit={this.handleSubmit}
                    className="login-signup-form">

                <div className="session-element">
                  <label >Username:
                    <br/>
                    <input
                      type="text"
                      value={this.state.credentials.username}
                      onChange={this.update('username')}
                      className="session-input"
                      tabIndex="0"/>
                  </label>
                </div>
                <br/>
                <div className="session-element">
                  <label >Password:
                    <br/>
                    <input
                      type="password"
                      value={this.state.credentials.password}
                      onChange={this.update('password')}
                      className="session-input"
                      tabIndex="1"/>
                    <br />
                  </label>
                </div>
                {signupInputs}
                <button className="session-button">{buttonText}</button>
                {this.renderErrors()}
                <a className="guest-button"
                  onClick={this.demoLogin}>Guest User</a>
              </form>
        </Modal>
      </div>
    );
  }
}


export default withRouter(SessionFormModal);
