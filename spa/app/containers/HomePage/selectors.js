/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);// what?! we can pass a second default state?!

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

  );
export { makeSelectPostStack };
