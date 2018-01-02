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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

  render() {
    console.log(this.state);
    const buttonText = this.props.match.url === "/signup" ? "Sign up" : "Log in";
    let signupInputs;

    if (this.props.match.url === "/signup") {
       signupInputs = (
        <div>
          <label>email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>

          <label>location
            <input
              type="text"
              value={this.state.location}
              onChange={this.update('location')}/>
          </label>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}/>
        </label>

        <label>Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}/>
        </label>
        {signupInputs}
        <button>{buttonText}</button>
        {renderErrors()}
      </form>
    );
  }
}

export default SessionForm;
