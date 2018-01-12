import { RECEIVE_GROUP, RECEIVE_GROUPS } from '../actions/group_actions';
import { RECEIVE_EVENTS, RECEIVE_EVENT  } from '../actions/event_actions';
import { merge } from 'lodash';


const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, action.events);
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return Object.assign({}, state, { [action.event.id]: action.event});
    default:
      return state;
  }
};

export default eventsReducer;
