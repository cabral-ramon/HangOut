import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupsIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.groups;

  }

  componentDidMount() {
    this.props.fetchGroups();
  }


  render() {
    const groupIndexItems = Object.values(this.props.groups).map ( (group) => {
      return (
        <GroupIndexItem group={group} />
      );
    });
    return(
      <ul>
        {groupIndexItems}
      </ul>
    );
  }

}

export default GroupsIndex;
