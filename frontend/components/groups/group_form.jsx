import React from 'react';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      description: "",
      image: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    this.props.createGroup(group);
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
    return (
      <div className="group-form-main">
        <header className="group-form-header">
            <h2>Create a new Hangout</h2>
            <p>We'll help you find the right people to make it happen.</p>
        </header>
        <div className="group-form-container">
          <form onSubmit={this.handleSubmit}
            className="group-form">
            <label>Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="group-form-name"/>
            </label>
            <label>Location:
              <input
                type="text"
                value={this.state.location}
                onChange={this.update('location')}
                className="group-form-location"/>
            </label>
            <label>Description:
              <input
                type="textarea"
                value={this.state.description}
                onChange={this.update('description')}
                className="group-form-description"/>
            </label>
            <button className="group-form-btn">Create Hangout!</button>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default GroupForm;
