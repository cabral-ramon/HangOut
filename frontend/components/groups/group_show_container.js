import { connect } from 'react-redux';
import { fetchGroup, fetchGroupMembers } from '../../actions/group_actions';
import {
  createMembership,
  removeMembership,
  deleteGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.match.params.groupId);
  const events = Object.values(state.events).filter( (event) =>
    event.group_id === groupId
  );
  const group = state.groups[groupId] || { memberIds: [] };
  let isOwner = false;
  if (state.session.currentUser) {
    if (group.ownerId === state.session.currentUser.id) {
      isOwner = true;
    }
  }
  return {
    group,
    groupId,
    currentUser: state.session.currentUser,
    events,
    memberIds: group.memberIds || [],
    members: Object.values(state.members),
    comments: group.comments || [],
    isOwner
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
    fetchGroupMembers: (groupId) => dispatch(fetchGroupMembers(groupId)),
    createMembership: (membership) => dispatch(createMembership(membership)),
    removeMembership: (groupId) => dispatch(removeMembership(groupId)),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);
