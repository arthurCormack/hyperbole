/*
 *
 * ArchivePage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_AUTHOR,
  LOAD_AUTHOR_SUCCESS,
  LOAD_AUTHOR_FAILURE,
  ZERO_AUTHOR,
  TRIGGER_LOAD_MORE_AUTHOR_POSTS,
  LOAD_AUTHOR_POSTS,
  LOAD_AUTHOR_POSTS_SUCCESS,
  LOAD_AUTHOR_POSTS_FAILURE

} from './constants';

export function loadAuthor() {
  return {
    type: LOAD_AUTHOR,
  };
}


export function loadAuthorSuccess(data) {
  return {
    type: LOAD_AUTHOR_SUCCESS,
    data,
  };
}
export function loadAuthorFailure() {
  return {
    type: LOAD_AUTHOR_FAILURE,
  };
}
export function zeroAuthor() {
  return {
    type: ZERO_AUTHOR,
  };
}
export function triggerLoadMoreAuthorPosts() {
  console.log(`triggerLoadMoreAuthorPosts`);
  return {

    type: TRIGGER_LOAD_MORE_AUTHOR_POSTS,
  }
}
export function loadAuthorPosts() {
  return {
    type: LOAD_AUTHOR_POSTS,
  };
}


export function loadAuthorSuccessPosts(data) {
  return {
    type: LOAD_AUTHOR_POSTS_SUCCESS,
    data,
  };
}
export function loadAuthorFailurePosts() {
  return {
    type: LOAD_AUTHOR_POSTS_FAILURE,
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
