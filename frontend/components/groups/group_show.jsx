import React from 'react';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img url={this.props.image}/>
        <p>this.props.location</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default GroupShow;
