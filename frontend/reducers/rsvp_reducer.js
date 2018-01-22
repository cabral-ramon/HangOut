import { RECEIVE_EVENT } from '../actions/event_actions';

const defaultState = {};

const rsvpsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return action.rsvps;
    default:
      return state;
  }
};

export default rsvpsReducer;
