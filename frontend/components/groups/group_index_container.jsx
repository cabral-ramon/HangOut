import { connect } from 'react-redux';
import { fetchGroups, fetchUsersGroups } from '../../actions/group_actions';
import GroupIndex from './groups_index';

const mapStateToProps = (state, { homepage }) => {

  return {
    groups: state.groups,
    userId: state.session.currentUser ?
      state.session.currentUser.id :
      null
  };
};

const mapDispatchToProps = (dispatch, { homepage }) => {
  
  return {
    fetchGroups:  homepage ?
      (userId) => dispatch(fetchUsersGroups(userId)) :
      () => dispatch(fetchGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
