import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionFormModal from './session_form_modal';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    formType: ownProps.formType,
    id: ownProps.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.formType === "signup") {
    return {
      processForm: (user) => dispatch(signup(user)),
      guestLogin: (user) => dispatch(login(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(login(user)),
      guestLogin: (user) => dispatch(login(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormModal);
