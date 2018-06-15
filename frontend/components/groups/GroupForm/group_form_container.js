import { connect } from 'react-redux';
import { createGroup,
         createMembership,
         updateGroup } from '../../../actions/group_actions.js';
import GroupForm from './group_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.group
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      createGroup: (group) => dispatch(createGroup(group)),
      createMembership: (membership) => dispatch(createMembership(membership))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
