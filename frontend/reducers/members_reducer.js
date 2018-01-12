import { RECEIVE_GROUP } from '../actions/group_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';

const defaultState = {};

const membersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GROUP:
      return action.members;
    case RECEIVE_EVENT:
      return Object.assign({}, state, action.rsvps);
    default:
      return state;
  }
};

export default membersReducer;
