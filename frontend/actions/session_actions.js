import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
  };
};

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then( (user) =>
  dispatch(receiveCurrentUser(user)), (error) =>
  dispatch(receiveSessionErrors(error)));
};

export const logout = () => (dispatch) => {
  SessionApiUtil.logout().then ( () =>
  dispatch(receiveCurrentUser(null)));
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then( (user) => {

    return dispatch(receiveCurrentUser(user));
  }, (errors) => {
    return dispatch(receiveSessionErrors(errors));
  });
};
