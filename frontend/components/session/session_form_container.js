import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/signup") {
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

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
