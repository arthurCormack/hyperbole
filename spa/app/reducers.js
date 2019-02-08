/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter, routerReducer, LOCATION_CHANGE } from 'connected-react-router/immutable';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

 /*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

function location(state = null, action) {
  // console.log(`location reducer recieved and action:`);
  // console.log(action);
  switch (action.type) {

    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
const routeReducer = combineReducers({ locationBeforeTransitions: location });


export default function createReducer(injectedReducers = {}) {
  console.log(`createReducer()`);
  const rootReducer = combineReducers({
    route: routeReducer,
    global: globalReducer,
    language: languageProviderReducer,
    // router: routerReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
