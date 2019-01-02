/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { filter, matches, has } from 'lodash';

import { makeSelectPostStack as makeSelectGlobalPostStack } from 'containers/App/selectors';

const selectHome = state => state.get('home', initialState);

// const makeSelectUsername = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.get('username'),
//   );

const makeSelectFrontPagePosts = () =>
  createSelector(
    selectHome,
    globalState => globalState.get('frontPagePosts'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    globalState => globalState.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    globalState => globalState.get('error'),
  );

/*
  The home page has it's postStack ...
  When we load in the initial posts for the home page, we put the post excerpts into the postStack.
  And the home page merely has a stack of references to the posts, and possibly some instructions about how to portray them on the homepage, if the re are any options/

*/
const makeSelectPostStack = () =>
  createSelector(
    makeSelectGlobalPostStack(),
    makeSelectFrontPagePosts(),
    (globalPostStack, frontPagePosts) => {
      console.log(`makeSelectPostStack()`);
      console.log(`globalPostStack==`, globalPostStack);// empty map
      console.log(`FrontPagePosts==`, frontPagePosts);
      // so ... to test this, and see it working, we actually have to load in some posts!

      // const intersect = filter(globalPostStack, has(globalPostStack, homePostStack.id));
      // return
      // return all the items in globalPostStack that have ids that are in homePostStack
      return false;
    }
  );
export { selectHome, makeSelectPostStack, makeSelectLoading, makeSelectError };
