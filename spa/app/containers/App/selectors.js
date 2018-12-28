/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

// const makeSelectCurrentUser = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.get('currentUser'),
//   );
//
// const makeSelectLoading = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.get('loading'),
//   );
//
// const makeSelectError = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.get('error'),
//   );
//
// const makeSelectRepos = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.getIn(['userData', 'repositories']),
//   );
//
// const makeSelectLocation = () =>
//   createSelector(
//     selectRouter,
//     routerState => routerState.get('location').toJS(),
//   );
const makeSelectPostStack = () =>
  // console.log(`makeSelectPostStack()`);
  createSelector(
    selectGlobal,
    globalState => globalState.get('postStack')
  );


export {
  selectGlobal,
  // makeSelectCurrentUser,
  // makeSelectLoading,
  // makeSelectError,
  // makeSelectRepos,
  // makeSelectLocation,
  makeSelectPostStack,
};
