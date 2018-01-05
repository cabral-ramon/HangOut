import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      location: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeSessionForm = this.closeSessionForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then ( () => {
      this.props.history.push("/");
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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

  closeSessionForm(e){
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    const buttonText = this.props.match.url === "/signup" ? "Sign up" : "Log in";
    let signupInputs;
    let title;

    if (this.props.match.url === "/signup") {
       title = "Sign Up";
       signupInputs = (
        <div className="session-element">
          <label>email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="session-input"/>
          </label>

          <label>location
            <input
              type="text"
              value={this.state.location}
              onChange={this.update('location')}
              className="session-input"/>
          </label>
        </div>
      );
    } else {
      title = "Log in";
    }
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}
              className="login-signup-form">
          <button onClick={this.closeSessionForm}
            className="close-btn">X</button>
          <div className="session-form-header">
            <h3>{title}</h3>
            <p>Not registered with us yet? <a href="" >Sign Up?</a></p>
          </div>

          <div className="session-element">
            <label >Username:
              <br/>
              <input
                type="text"
                value={this.state.username}
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
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
                tabIndex="1"/>
              <br />
            </label>
          </div>
          {signupInputs}
          <button className="session-button">{buttonText}</button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default SessionForm;
