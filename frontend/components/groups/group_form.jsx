import React from 'react';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      description: "",
      image: null,
      imageUrl: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("group[name]", this.state.name);
    formData.append("group[location]", this.state.location);
    formData.append("group[description]", this.state.description);
    formData.append("group[image]", this.state.image);
    // const group = Object.assign({}, this.state);
    this.props.createGroup(formData);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile() {
    return e => {
      e.preventDefault();
      var file = e.currentTarget.files[0];
      var fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({image: file, imageUrl: fileReader.result});
      };
    };
  }
  if (file) {
    fileReader.readAsDataUrl(file);
  }

  renderErrors() {
    if (this.props.errors) {
    return(
      <p></p>
    );
    }
  }

  render() {
    return (
      <div className="group-form-main">
        <header className="group-form-header">
          <img className="group-form-image" src="https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" />
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
            <label>Image:
              <input
                type="file"
                value={this.state.imageUrl}
                onChange={this.updateFile()}
                className="group-form-image"/>
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
