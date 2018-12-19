/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
// import { keys } from 'lodash';
// this is the convention: instigation: LOAD_[WHATTOLOAD], followed by either successful completion: LOAD_[WHATTOLOAD]_SUCCESS, or LOAD_[WHATTOLOAD]_FAILURE
import { LOAD_INITIAL_FRONTPAGEPOSTS, LOAD_INITIAL_FRONTPAGEPOSTS_SUCCESS, LOAD_INITIAL_FRONTPAGEPOSTS_FAILURE } from './constants';// initial, is the stuff that would get loaded, initially. Like in the SSR. The SSR would only load the initial posts, instead of all of them.

// The initial state of the App
export const initialState = fromJS({
  error: false,
  loading: false,
  frontPagePosts: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INITIAL_FRONTPAGEPOSTS:
      return state
        .set('error', false)
        .set('loading', true);
    case LOAD_INITIAL_FRONTPAGEPOSTS_SUCCESS:
      // we don't simply put the posts in their fullness here!
      // we put info about what posts, from the App level postStack, will be present here.
      // that means an array of all the id's in action.frontPagePosts
      // .set('frontPagePosts', action.frontPagePosts);
      let frontPagePosts = [];
      action.frontPagePosts.forEach((item, i) => {
        // only take out stuff that we won't have displayed in the global postStack. like homePage specific display iinstructions.
        // the App reducer will also receive this action, and it will set actual content there, but probably only partial (excerpt), as opposed to full content (which we would really only get on SinglePostPages)
        frontPagePosts[item.post_id] = {displayMode: item.displayMode};
      });
      return state
        .set('error', false)
        .set('loading', false)
        .set('frontPagePosts', frontPagePosts);
        // we want a keyed array with other info about how to display those posts - info that might come with the frontPagePosts, but not be represented in the global postStack.

    case LOAD_INITIAL_FRONTPAGEPOSTS_FAILURE:
      return state
        .set('loading', false)
        .set('error', true)
        .set('frontPagePosts', false);

    default:
      return state;
  }
}

export default homePageReducer;
