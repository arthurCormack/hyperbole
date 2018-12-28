/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 */

import { LOAD_INITIAL_FRONTPAGEPOSTS, LOAD_INITIAL_FRONTPAGEPOSTS_SUCCESS, LOAD_INITIAL_FRONTPAGEPOSTS_FAILURE } from './constants';

export function loadFrontPagePosts() {
  return {
    type: LOAD_INITIAL_FRONTPAGEPOSTS,
  }
}

export function loadFrontPagePostsSuccess(data) {
  return {
    type: LOAD_INITIAL_FRONTPAGEPOSTS_SUCCESS,
    data
  }
}

export function loadFrontPagePostsFailure() {
  return {
    type: LOAD_INITIAL_FRONTPAGEPOSTS_FAILURE,
  }
}
