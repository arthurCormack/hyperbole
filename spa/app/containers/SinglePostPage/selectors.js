import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the singlePostPage state domain
 */

const selectSinglePostPageDomain = state =>
  state.singlePostPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SinglePostPage
 */

const makeSelectSinglePostPage = () =>
  createSelector(
    selectSinglePostPageDomain,
    substate => substate,
  );

export default makeSelectSinglePostPage;
export { selectSinglePostPageDomain };
