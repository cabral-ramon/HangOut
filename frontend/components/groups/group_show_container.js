import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import { createMembership } from '../../actions/membership_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => {
  const groupId = parseInt(ownProps.match.params.groupId);
  return {
    group: state.groups[groupId],
    groupId: groupId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
    createMembership: (membership) => dispatch(createMembership(membership))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);
