
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_Reducer';
import groupReducer from './group_reducer';


const rootReducer = combineReducers({
  groups: groupReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
