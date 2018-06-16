import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import GroupIndex from './groups_index';

const mapStateToProps = (state) => {
  // add logic here for my groups / all groups
  return {
    groups: state.groups,
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  // add logic here for my groups / all groups
  return {
    fetchGroups: () => dispatch(fetchGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
