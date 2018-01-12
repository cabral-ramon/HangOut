import { connect } from 'react-redux';
import { fetchGroup, fetchGroupMembers } from '../../actions/group_actions';
import { createMembership, removeMembership } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.match.params.groupId);
  const events = Object.values(state.events).filter( (event) =>
    event.group_id === groupId
  );
  const group = state.groups[groupId] || { memberIds: [] };
  // const members = Object.values(state.members).filter( (member) =>
  //   member.username);
    // let memberIds;
    // if(state.groups[groupId]){
    //   memberIds = state.groups[groupId].memberIds;
    // } else {
    //   memberIds = [];
    // }

  return {
    group: group,
    groupId: groupId,
    currentUser: state.session.currentUser,
    events: events,
    memberIds: group.memberIds || [],
    members: Object.values(state.members)
    // members: group.memberIds.map( id => state.members[id] )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
    fetchGroupMembers: (groupId) => dispatch(fetchGroupMembers(groupId)),
    createMembership: (membership) => dispatch(createMembership(membership)),
    removeMembership: (groupId) => dispatch(removeMembership(groupId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);
