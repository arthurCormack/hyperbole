/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';


// we will import and compose all the reducers of containers that detch content from the CAA (Content Authority API)
// because that content will go into the global postStack.
// and then all that the containers have to worry about, is presenting a selection. They just have to have references to items in the postStack as their selection.
// also, it doesn't have any notion of loading or error; that kind of concern lives in the containers instigating the actual fetching.

// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  postStack: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_REPOS:
    //   return state
    //     .set('loading', true)
    //     .set('error', false)
    //     .setIn(['userData', 'repositories'], false);
    // case LOAD_REPOS_SUCCESS:
    //   return state
    //     .setIn(['userData', 'repositories'], action.repos)
    //     .set('loading', false)
    //     .set('currentUser', action.username);
    // case LOAD_REPOS_ERROR:
    //   return state.set('error', action.error).set('loading', false);

    
    default:
      return state;
  }
}

export default appReducer;
