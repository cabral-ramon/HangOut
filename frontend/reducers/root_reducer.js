
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_Reducer';
import groupReducer from './group_reducer';
import eventReducer from './event_reducer';
import membersReducer from './members_reducer';


const rootReducer = combineReducers({
  groups: groupReducer,
  members: membersReducer,
  events: eventReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
