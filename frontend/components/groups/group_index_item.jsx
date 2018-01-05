import React from 'react';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.redirectToShowPage = this.redirectToShowPage.bind(this);
  }

  redirectToShowPage(e) {
    e.preventDefault();
    this.props.history.push(`/groups/${this.props.groupId}`);
  }

  render() {
    return (
      <li className="group-container"
          onClick={this.redirectToShowPage}>
        <img src={this.props.group.image}></img>
        <h4
          className="group-name">
          {this.props.group.name.length > 30 ?
            this.props.group.name.slice(0,30) + '...' : this.props.group.name}
        </h4>
        <p className="group-location">{this.props.group.location}</p>
      </li>
    );
  }

}

export default GroupIndexItem;
