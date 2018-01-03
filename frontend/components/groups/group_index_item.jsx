import React from 'react';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.group.name}</li>
    );
  }

}

export default GroupIndexItem;
