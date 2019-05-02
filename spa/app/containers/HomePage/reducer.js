/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { combineReducers } from 'redux';

import {
  LOAD_HOMEPAGE_INITIALPOSTS,
  LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS,
  LOAD_HOMEPAGE_INITIALPOSTS_FAILURE,
} from './constants';

// // The initial state of the initialPosts
const initialPostsState = {
  loading: false,
  error: false,
  posts: false,// false or []
};

// /* eslint-disable default-case, no-param-reassign */
// const initialPosts = (state = initialPostsState, action) => {
//   produce(state, draft => {
//     switch(action.type) {
//       case LOAD_HOMEPAGE_INITIALPOSTS:
//         draft.loading = true;
//         draft.error = false;
//         draft.posts = false;
//         break;
//       case LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS:
//         draft.loading = false;
//         draft.error = false;
//         draft.posts = action.posts;
//         break;
//       case LOAD_HOMEPAGE_INITIALPOSTS_FAILURE:
//         draft.loading = false;
//         draft.error = true;
//         draft.posts = false;
//         break;
//       default:
//         draft = draft;
//     }
//   })
// }

export const initialState = {
  initialPosts: initialPostsState,
};
// export const initialState = initialPostsState;
// // const homeReducer = combineReducers({
// //   // initialPosts,
// // });

// // export default homeReducer;
// export default initialPosts;


import { CHANGE_USERNAME } from './constants';

// The initial state of the App
// export const initialState = {
//   username: '',
// };

/* eslint-disable default-case, no-param-reassign */
const initialPosts = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case LOAD_HOMEPAGE_INITIALPOSTS:
        draft.loading = true;
        draft.error = false;
        draft.posts = false;
        break;
      case LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.posts = action.posts;
        break;
      case LOAD_HOMEPAGE_INITIALPOSTS_FAILURE:
        draft.loading = false;
        draft.error = true;
        draft.posts = false;
        break;
    }
  });

const homeReducer = combineReducers({
  initialPosts,
});

export default homeReducer;
