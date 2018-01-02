import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/signup") {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(login(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
