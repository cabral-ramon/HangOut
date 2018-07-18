import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

// ONLY USE BELOW CODE FOR DEVELOPMENT IN CHROME WITH REDUX DEVTOOL EXTENSION!!!
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = (preloadedState = {}) =>
//   createStore(
//     rootReducer,
//     preloadedState,
//     composeEnhancers(applyMiddleware(thunk))
//   );

export default configureStore;
