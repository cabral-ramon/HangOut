import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import GroupIndex from './groups_index';

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups: () => dispatch(fetchGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
