/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectInitialPosts = () =>
  createSelector(
    selectHome,
    homeState => homeState.initialPosts,
  );

const makeSelectInitialPostsPosts = () =>
  createSelector(
    makeSelectInitialPosts,
    homeState => homeState.initialPosts,
  );
const makeSelectInitialPostsLoading = () =>
  createSelector(
    makeSelectInitialPosts,
    homeState => homeState.loading,
  );
const makeSelectInitialPostsError = () =>
  createSelector(
    makeSelectInitialPosts,
    homeState => homeState.error,
  );

export {
  selectHome,
  makeSelectInitialPostsPosts,
  makeSelectInitialPostsLoading,
  makeSelectInitialPostsError,
};
