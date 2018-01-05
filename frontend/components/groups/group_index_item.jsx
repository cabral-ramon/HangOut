import React from 'react';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li className="group-container">
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
