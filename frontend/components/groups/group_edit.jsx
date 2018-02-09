import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.group.name,
      location: this.props.group.location,
      description: this.props.group.description,
      id: this.props.group.id
    };
    this.edit = true;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("group[name]", this.state.name);
    formData.append("group[location]", this.state.location);
    formData.append("group[description]", this.state.description);
    if (this.state.image) {
      formData.append("group[image]", this.state.image);
    }
    formData.append("group[id]", this.state.id);
    this.props.updateGroup(formData).then( (response) => {
      this.props.history.push(`/groups/${this.props.group.id}`);
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    e.preventDefault();
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({image: file, imageUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", image: null });
    }
  }


  renderErrors() {
    return(
      <ul className="errors-container">
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}
            className="error-item">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  requireLogin() {
    if (!this.props.currentUser){
      return (
        <p className="errors">You must sign in to create a Hangout!</p>
        );
    } else {
      return null;
    }
  }

  render() {
    let imageName;
    if (this.state.image) {
      imageName = this.state.image.name;
    } else {
      imageName = "";
    }
    return (
      <div className="group-form-main">
        <div className="group-form-container">
          <form onSubmit={this.handleSubmit}
            className="group-form">
            {this.requireLogin()}
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
              <textarea
                type="textarea"
                value={this.state.description}
                onChange={this.update('description')}
                className="group-form-description"/>
            </label>
            <label>Image:
              <input
                type="file"
                onChange={this.updateFile}
                className="group-form-image"/>
            </label>
              <button className="group-form-btn">Edit Hangout!</button>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupEdit);
