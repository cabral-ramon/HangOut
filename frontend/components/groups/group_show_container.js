import { connect } from 'react-redux';
import { fetchGroup, fetchGroupMembers } from '../../actions/group_actions';
import { createMembership } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.match.params.groupId);
  const events = Object.values(state.events).filter( (event) =>
    event.group_id === groupId
  );
  let memberIds = state.groups[groupId].memberIds;
  return {
    group: state.groups[groupId],
    groupId: groupId,
    currentUser: state.session.currentUser,
    events: events,
    memberIds: memberIds,
    members: state.members

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
    fetchGroupMembers: (groupId) => dispatch(fetchGroupMembers(groupId)),
    createMembership: (membership) => dispatch(createMembership(membership))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);
