import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import { merge } from "lodash";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
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
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  update(field) {
    return e =>
      this.setState(
        merge({}, this.state, {
          credentials: { [field]: e.currentTarget.value }
        })
      );
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
      this.props.processForm(formData).then(user => {
        this.props.history.push("/homepage");
      });
    } else {
      const user = this.state.credentials;
      this.props.processForm(user).then(() => {
        this.props.history.push("/homepage");
      });
    }
  }

  demoLogin(e) {
    e.preventDefault();
    this.props
      .guestLogin({
        username: "Guest User",
        password: "password"
      })
      .then(() => {
        this.props.history.push("/homepage");
      });
  }

  renderErrors() {
    return (
      <ul className="errors-container">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error-item">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  modalButtonRender() {
    if (this.props.id === "2") {
      return (
        <button onClick={this.openModal} className="video-signup-btn">
          {title}
        </button>
      );
    } else {
      let title = this.props.formType === "signup" ? "Sign up" : "Log in";
      return (
        <button onClick={this.openModal} className="navbar-links">
          {title}
        </button>
      );
    }
  }

  updateFile(e) {
    e.preventDefault();
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState(
        merge({}, this.state, {
          credentials: { image: file, imageUrl: fileReader.result }
        })
      );
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState(
        merge({}, this.state, { credentials: { imageUrl: "", image: null } })
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
          <TextField
            label="Email"
            type="text"
            value={this.state.credentials.email}
            onChange={this.update("email")}
          />
          <br />
          <TextField
            label="Location"
            type="text"
            value={this.state.credentials.location}
            onChange={this.update("location")}
          />
          <br />
          <br />
          <label htmlFor="file">
            User Icon:
            <input type="file" onChange={this.updateFile} />
          </label>
        </div>
      );
    } else {
      title = "Log in";
    }
    let buttonClass =
      this.props.id === "2" ? "video-signup-btn" : "navbar-links";
    return (
      <React.Fragment>
        <button onClick={this.openModal} className={buttonClass}>
          {title}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="session-form-header">
            <h2
              ref={subtitle => (this.subtitle = subtitle)}
              className="event-form-header"
            >
              {title}
            </h2>
            <IconButton onClick={this.closeModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <form onSubmit={this.handleSubmit} className="login-signup-form">
            <div className="session-element">
              <TextField
                type="text"
                value={this.state.credentials.username}
                label="Username"
                onChange={this.update("username")}
                margin="normal"
              />
            </div>
            <br />
            <div className="session-element">
              <TextField
                type="password"
                value={this.state.credentials.password}
                label="Password"
                onChange={this.update("password")}
              />
            </div>
            {signupInputs}
            <button className="session-button">{buttonText}</button>
            <button
              className="session-button guest-button"
              onClick={this.demoLogin}
            >
              Guest User
            </button>
            {this.renderErrors()}
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(SessionFormModal);
