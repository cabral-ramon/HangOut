import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions.js';
import GroupForm from './group_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.group
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
      createGroup: (group) => dispatch(createGroup(group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
