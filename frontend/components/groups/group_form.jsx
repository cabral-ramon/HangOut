import React from 'react';
import { withRouter } from 'react-router-dom';

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

      //test//
      const groupId = group.id;
      const userId = this.props.currentUser.id;
      const membership = Object.assign({}, { group_id: groupId, user_id: userId});
      this.props.createMembership(membership);
      //test//

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
    if (this.props.errors) {
    return(
      <p></p>
    );
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
            <button className="group-form-btn">Create Hangout!</button>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupForm);
