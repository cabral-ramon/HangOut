import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupsIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      groups: this.props.groups
    };

  }

  componentDidMount() {
    this.props.fetchGroups(this.props.userId);
  }


  render() {
    const groupIndexItems = Object.values(this.props.groups).map ( (group) => {
      return (
        <GroupIndexItem group={group} key={group.id}/>
      );
    });
    return(
      <ul className="group-index-container">
        {groupIndexItems}
      </ul>
    );
  }

}

export default GroupsIndex;
