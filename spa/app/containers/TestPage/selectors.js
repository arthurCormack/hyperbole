import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testPage state domain
 */

const selectTestPageDomain = state => state.testPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestPage
 */

const makeSelectTestPage = () =>
  createSelector(
    selectTestPageDomain,
    substate => substate,
  );

export default makeSelectTestPage;
export { selectTestPageDomain };
