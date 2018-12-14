// import { syncHistoryWithStore } from 'react-router-redux';// sso .. this doesn't exist in react-router-4 land. fusk.
// import { routerMiddleware } from 'react-router-redux';// sso .. this doesn't exist in react-router-4 land. fusk.
// import { routerMiddleware } from 'connected-react-router/immutable';
// we don't even need routerMiddleware here
import { makeSelectLocation } from 'containers/App/selectors';

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), makeSelectLocationState
// must be provided for resolving how to retrieve the "route" in the state
export default function syncHistory(history, store) {
  // console.log(`syncHistory()`);
  // // console.log(history);
  //
  // console.log(store);

  // return syncHistoryWithStore(history, store, {
  //   selectLocationState: makeSelectLocationState(),
  // });
  // const middleware = routerMiddleware(history);

  return syncHistoryWithStore(history, store, {
    selectLocationState: makeSelectLocation(),
  });

}
