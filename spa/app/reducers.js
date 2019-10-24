/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { routerReducer, LOCATION_CHANGE, connectRouter } from 'connected-react-router';
import { history as initialHistory} from 'utils/history';
// import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

// routerReducer
export function location(state = null, action) {
  // console.log(`location reducer recieved and action:`);
  // console.log(action);
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}, history = initialHistory) {
  
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    // connectedRouter: routerReducer,
    location,
    ...injectedReducers,
  });

  return rootReducer;
}
