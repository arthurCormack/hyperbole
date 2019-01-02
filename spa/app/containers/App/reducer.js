/*
 * AppReducer
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
import { combineReducers } from 'redux-immutable';

import { has } from 'lodash';
// import { LOAD_POST_SUCCESS } from 'containers/SinglePosts/constants';
import { LOAD_INITIAL_FRONTPAGEPOSTS_SUCCESS } from 'containers/HomePage/constants';

// we will import and compose all the reducers of containers that detch content from the CAA (Content Authority API)
// because that content will go into the global postStack.
// and then all that the containers have to worry about, is presenting a selection. They just have to have references to items in the postStack as their selection.
// also, it doesn't have any notion of loading or error; that kind of concern lives in the containers instigating the actual fetching.

// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
// const initialState = fromJS({
//   postStack: false,
// });

// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     // case LOAD_REPOS:
//     //   return state
//     //     .set('loading', true)
//     //     .set('error', false)
//     //     .setIn(['userData', 'repositories'], false);
//     // case LOAD_REPOS_SUCCESS:
//     //   return state
//     //     .setIn(['userData', 'repositories'], action.repos)
//     //     .set('loading', false)
//     //     .set('currentUser', action.username);
//     // case LOAD_REPOS_ERROR:
//     //   return state.set('error', action.error).set('loading', false);
//
//
//     default:
//       return state;
//   }
// }
//
// export default appReducer;

// is that right? it's interesting, but is it correct? where should the poststack actually live? in the state.SinglePostPage.postStack? or in state.postStack?
// why do we put the postStack here, at the App level, and not at the SinglePostPage level?
// because post dat might be required by more than kjust post pages: ArchivePages, also use post data.
// and we don't want it to have to be in two places at the same time ... so ... On the
// so, the App, has to be aware of some of the intricacies of the SinglePostPage, and the ArchivePage, and any other route containers that might have to load in post data.

function postStack (state = fromJS({}), action) {// initial state is an immutable object/collection.
  // where should the postStack be defined? ... before we answer that, let's instead define what the postStack actually is. And then maybe where it should live will become apparant.
  // the postStack is a local store of posts that get loaded in. It's a keyed array of objects, with post_id as key.
  // The objects can be in one of a few different possible state:
  // Fully Loaded (),
  // Partially Loaded (excerpt),
  // Loading (loading the fully loaded state)
  // also, we keep some info from the wp_posts, like post_type, post_date, AuthorData, and, importantly a lastViewed (DateTime) that gets set every time the post gets viewed, and which can be used to determine age, which is the basis upon which we do a sort of Garmage collection.
  // except it's not really garbage collection, its just taking the garbage out to the curb, so that JS's garbage collectors can collect it.

  // our simple solution to the endless scroll, is to end it after an arbitray number of posts, and provide a next article link, that will start the stack all over again.
  // alternatively we could have a rolling cull, and spacers inthe stack so as to not disrupt the scrollTop when we remove posts from the stack. But, that is perhaps unneccesary in most circumstances.1

  // where does this garbage collection happen? App level Saga, or elsewhere?
  // maybe we should put all of these things that are concerned with WP, inside a big WP container that handles everything that has to do with the CAA?!
  // it's actually now a bad idea. But is that not sort of what we are making the APP into as well?

  // ... there are a few different instigators that can result in data being put into the postStack.
  //
  // the Single Post Page Container will care about loading, and error, and will care about what post is displayed.
  //
  // the this.props.postStack that will be present in the SinglePostPage is a result of the intersection / selection
  // between the App level postStack, and the selection of posts.
  // but the App level postStack needs to import reducers from each route container that loads post data.
  //
  switch (action.type) {
    case LOAD_INITIAL_FRONTPAGEPOSTS_SUCCESS:
      // put a partial post into the stack
      // return state.set(action.data.id, action.data);
      // this action has frontPagePosts, and maybe some other stuff.
      // at first, let's try just sticking it in there, and then we can use logic to determine exacly what to put in there.

      //let previousPostStack = clone(state);
      const { frontPagePosts } = action;
      frontPagePosts.forEach((item) => {
        // if the item isn't already in the postStack, then stick it in.
        // if (item.post_id) {
        //
        // }
        if (has(state, item.post_id)) {
          // then leave it alone.
          // TODO, replace it, if the last_modified date of the new one > the old one.

        } else {
          // wow ... there are multiple state mutations, do we really want to do them each seperately? or make a new temporary stack, and then make the adjustments, and then update the whole thing.
          // is that seriously what I want to call it? loadState?
          // it means homw much of the thing has loaded. archives and homepage load partial or excerpt. full is on post pages. so let's say the 4 loadLevels are: false, excerpt, full, cleared
          item.loadLevel = 'excerpt';// possible loadStates: none (not ever loaded yet), emptied (loaded and then emptied), excerpt (excerpt loaded, but not full content), full (everything - full contnet, including multipage post_content, has been loaded).
          state.set(item.post_id, item);// set each thin, and then return.
        }
      });
      return state;
      // put partial/excerpt posts into the stack, but where the post is already there, only replace content if the modified date is greater.
      // we will have an array of posts
      // we'll come back to this later.
    default:
      return state;
  }

}

export default combineReducers({
  postStack,
  // wp_request,
  // wp_userdata,
  // ads,
  // caardd,
});
