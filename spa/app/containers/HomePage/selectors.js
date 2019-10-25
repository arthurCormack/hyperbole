/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectInitialPosts = () =>
  createSelector(
    selectHome,
    (homeState) => {
      // console.log('makeSelectInitialPosts', homeState);
      return homeState.initialPosts;
    }
  );

const makeSelectInitialPostsPosts = () =>
  createSelector(
    makeSelectInitialPosts,
    (initialPosts) => {
      // console.log('makeSelectInitialPostsPosts', initialPosts);
      return initialPosts.posts;
    }
  );
const makeSelectInitialPostsLoading = () =>
  createSelector(
    makeSelectInitialPosts,
    initialPosts => initialPosts.loading,
  );
const makeSelectInitialPostsError = () =>
  createSelector(
    makeSelectInitialPosts,
    initialPosts => initialPosts.error,
  );

export {
  selectHome,
  makeSelectInitialPosts,
  makeSelectInitialPostsPosts,
  makeSelectInitialPostsLoading,
  makeSelectInitialPostsError,
};
