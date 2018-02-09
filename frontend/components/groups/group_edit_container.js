import { connect } from 'react-redux';
import { updateGroup } from '../../actions/group_actions';
import GroupEdit from './group_edit';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.group
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGroup: (groupId) => dispatch(updateGroup(groupId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit);
