/*
 *
 * TilesPage reducer
 *
 */

import { fromJS } from 'immutable';
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

const initialState = fromJS({
  bio: null,
  posts: null,
  authorSlug: null,
  authorName: null,
  pageNum: 0,
});

function authorPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_AUTHOR:
      return state.set('loading', true);
    case LOAD_AUTHOR_SUCCESS:
      return state
        .set('loading', false)
        .set('bio', action.data.bio)
        .set('posts', action.data.posts)
        .set('authorSlug', action.data.authorSlug)
        .set('authorName', action.data.authorName)
        .set('image', action.data.image)
        .set('count_user_posts', action.data.count_user_posts)
        .set('id', action.data.id);
    case LOAD_AUTHOR_FAILURE:
      return state.set('loading', false);
    case ZERO_AUTHOR:
      return state
        .set('bio', null)
        .set('posts', null)
        .set('authorSlug', null)
        .set('authorName', null)
        .set('pageNum', 0);
    case LOAD_AUTHOR_POSTS:
      return state.set('loading', true);
    case LOAD_AUTHOR_POSTS_SUCCESS:
      // console.log(`LOAD_AUTHOR_POSTS_SUCCESS`);
      // console.log(action);
      return state
        .set('loading', false)
        .update('posts', (arr) => arr.concat(action.data));
    case LOAD_AUTHOR_POSTS_FAILURE:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default authorPageReducer;
