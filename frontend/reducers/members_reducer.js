import { RECEIVE_GROUP } from '../actions/group_actions';

const defaultState = {};

const membersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, action.members);
    default:
      return state;
  }
};

export default membersReducer;
