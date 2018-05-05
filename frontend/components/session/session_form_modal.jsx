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
        email: "",
        image: "",
        imageUrl: ""
      }
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
    if (this.props.formType === "signup") {
      var formData = new FormData();
      formData.append("user[username]", this.state.credentials.username);
      formData.append("user[password]", this.state.credentials.password);
      formData.append("user[email]", this.state.credentials.email);
      formData.append("user[location]", this.state.credentials.location);
      formData.append("user[image]", this.state.credentials.image);
      this.props.processForm(formData).then( (user) => {
        this.props.history.push("/homepage");
      });
    } else {
      const user = this.state.credentials;
      this.props.processForm(user).then( () => {
        this.props.history.push("/homepage");
      });
    }
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
      <ul className="errors-container">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}
            className="error-item">
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

  updateFile(e) {
    e.preventDefault();
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState(merge({}, this.state, {credentials: {image: file, imageUrl: fileReader.result}}));
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState(merge({}, this.state, {credentials: { imageUrl: "", image: null }}));
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
          <label>Email:
            <input
              type="text"
              value={this.state.credentials.email}
              onChange={this.update('email')}
              className="session-input"/>
          </label>

          <label>Location:
            <input
              type="text"
              value={this.state.credentials.location}
              onChange={this.update('location')}
              className="session-input"/>
          </label>

          <label htmlFor="file">User Icon:
            <input
              type="file"
              onChange={this.updateFile}
              className="session-input"
              />
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
          ariaHideApp={false}
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
                      className="session-input"/>
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
                      className="session-input"/>
                    <br />
                  </label>
                </div>
                {signupInputs}
                <button className="session-button">{buttonText}</button>
                <button className="session-button guest-button"
                  onClick={this.demoLogin}>
                  Guest User
                </button>
                {this.renderErrors()}
              </form>
        </Modal>
      </div>
    );
  }
}


export default withRouter(SessionFormModal);
