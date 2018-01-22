import { connect } from 'react-redux';
import { createGroup, createMembership } from '../../actions/group_actions.js';
import GroupForm from './group_form';

const mapStateToProps = (state) => {
  return {
    //test
    currentUser: state.session.currentUser,
    //test
    errors: state.errors.group
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
      createGroup: (group) => dispatch(createGroup(group)),

      //test
      createMembership: (membership) => dispatch(createMembership(membership))
      //test
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
