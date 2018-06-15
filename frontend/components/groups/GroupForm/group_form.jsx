import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      description: "",
      image: "",
      imageUrl: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("group[name]", this.state.name);
    formData.append("group[location]", this.state.location);
    formData.append("group[description]", this.state.description);
    formData.append("group[image]", this.state.image);
    this.props.createGroup(formData).then( (group) => {

      const groupId = group.id;
      const userId = this.props.currentUser.id;
      const membership = Object.assign({}, { group_id: groupId, user_id: userId});
      this.props.createMembership(membership);

      this.props.history.push(`/groups/${group.id}`);
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
        <header className="group-form-header">
          <img className="group-form-image" src="https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" />
            <h2>Create a new Hangout</h2>
            <p>We'll help you find the right people to make it happen.</p>
        </header>
        <div className="group-form-container">
          <form onSubmit={this.handleSubmit}
            className="group-form">
            {this.requireLogin()}
            <TextField
              label="Name"
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="group-form-name"
              placeholder="What do you want your group to be called?"
            />
            <TextField
              label="Location"
              type="text"
              value={this.state.location}
              onChange={this.update('location')}
              className="group-form-location"
              placeholder="i.e. Queens, NY"
            />
            <TextField
              style={{height: 'auto', marginBottom: '20px'}}
              label="Description"
              multiline
              type="textarea"
              value={this.state.description}
              onChange={this.update('description')}
              className="group-form-description"
              placeholder="Tell us about your group"
            />
            <label>Image:
              <input
                type="file"
                onChange={this.updateFile}
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

export default withRouter(GroupForm);
