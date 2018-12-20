/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { makeSelectPostStack as makeSelectGlobalPostStack } from 'containers/App/selectors';

const selectHome = state => state.get('home', initialState);

// const makeSelectUsername = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.get('username'),
//   );

/*
  The home page has it's postStack ...
  When we load in the initial posts for the home page, we put the post excerpts into the postStack.
  And the home page merely has a stack of references to the posts, and possibly some instructions about how to portray them on the homepage, if the re are any options/

*/
const makeSelectPostStack = () =>
  createSelector(
    makeSelectGlobalPostStack(),
    (globalPostStack) => {

    }
  );
export { selectHome, makeSelectPostStack };
