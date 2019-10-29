/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */



import { LOAD_HOMEPAGE_INITIALPOSTS, LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS, LOAD_HOMEPAGE_INITIALPOSTS_FAILURE } from './constants';
// there are three pieces of state that the three action: loadHomePageInitialPosts, loadHomePageInitialPostsSuccess, and loadHomePageInitialPostsFailure
// are concerned with, loading, error, and posts. loading and error status are booleans that can be inferred, so they don't need to be accepted as parameters, or passed along in the action. The name of the action indicates how loading and error are set.
// but loadHomePageInitialPostsSuccess needs to pass alon the actual posts.

export function loadHomePageInitialPosts() {
  return {
    type: LOAD_HOMEPAGE_INITIALPOSTS,
  }
}

export function loadHomePageInitialPostsSuccess(posts) {
  return {
    type: LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS,
      posts,
  }
}

export function loadHomePageInitialPostsFailure() {
  return {
    type: LOAD_HOMEPAGE_INITIALPOSTS_FAILURE,
  }
}