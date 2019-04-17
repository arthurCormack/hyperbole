/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { combineReducers } from 'redux';
// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
// export const initialState = {
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// };

// /* eslint-disable default-case, no-param-reassign */
// const appReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case LOAD_REPOS:
//         draft.loading = true;
//         draft.error = false;
//         draft.userData.repositories = false;
//         break;

//       case LOAD_REPOS_SUCCESS:
//         draft.userData.repositories = action.repos;
//         draft.loading = false;
//         draft.currentUser = action.username;
//         break;

//       case LOAD_REPOS_ERROR:
//         draft.error = action.error;
//         draft.loading = false;
//         break;
//     }
//   });

/**
 * 
 * what is the dickens is this caardd thing anyways?
 * CAARDD = Content Authority Api Response Dead-Drop
 * The idea is that there is this Content Authority, which is an API, and that it has the content that gets loaded into this app.
 * we request that content by calling various API endpoints, with parameters gleaned from the URL path, and the Content Authority respondes with the content.
 * Or, if it does not find the content we are looking for, 
 * if it finds the content at a different address, it can give us a redirect to the correct place where that content lives (we then 301 direct there), 
 * or indicate that it is not found, we 404.
 * the caardd is used to help set the correct http code in the server response
 * So, what are the actions that could result in setting things in the caardd?
 * Well, in this case, we are assuming that the Content Authority is a wordpress json api, and that we are requesting either a post, an archive (category or tag), or a page.
 * (permalink structure.)
 */
const caardd = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {

    } 
  });

appReducer = combineReducers({
  caardd,
});

export default appReducer;
