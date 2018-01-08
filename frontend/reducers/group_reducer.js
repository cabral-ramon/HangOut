import { RECEIVE_GROUP, RECEIVE_GROUPS, REMOVE_GROUP } from '../actions/group_actions';
import { RECEIVE_MEMBERSHIP } from '../actions/membership_actions';

const defaultState = {};

const groupReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, { [action.group.id]: action.group});
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_MEMBERSHIP:
      return Object.assign({}, state, { [action.group.id]: action.group});
    case REMOVE_GROUP:
      const newState = Object.assign({}, state);
      delete newState[action.groupId];
      return newState;
    default:
      return state;
  }
};

export default groupReducer;
