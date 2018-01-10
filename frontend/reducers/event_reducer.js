import { RECEIVE_GROUP } from '../actions/group_actions';
import { RECEIVE_EVENTS } from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, action.events);
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default eventsReducer;
