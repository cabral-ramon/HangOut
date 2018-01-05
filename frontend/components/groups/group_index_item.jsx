import React from 'react';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.group.image.url);
    return (
      <li className="group-container" background-image={this.props.group.image.url}>
        <h4 className="group-name">{this.props.group.name}</h4>
        <p className="group-location">{this.props.group.location}</p>
      </li>
    );
  }

}

export default GroupIndexItem;
