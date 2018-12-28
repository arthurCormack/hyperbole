/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { APICALLURL_GETFRONTPAGEPOSTS } from 'apiCallURLs';

import { makeSelectPostStack as makeSelectFrontPagePosts, makeSelectLoading } from './selectors';
import { loadFrontPagePosts, loadFrontPagePostsSuccess, loadFrontPagePostsFailure } from './actions';
// import { LOAD_REPOS } from 'containers/App/constants';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import { isServer } from 'utils/detection';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
// export function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
//
//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

/**
 * Root saga manages watcher lifecycle
 */
// export default function* githubData() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }
function* firstLoadSaga() {
  // what is the request url ...
  // this is an interesting and complex thing to resolve ... where / how to we call the api ? how is the api's endpoints going to be organized?
  // do we simply pull the most recent posts? or do we make a special page that lets the site editor select articles? or a slideshow? in short, how do we know what we are doing here on the front page?
  // initially, let's just keep it simple. Get the n latest posts.
  // much of the gutenberg bells and whistles might not work, in dangerouslySetInnerHTML'd content; js that is supposed to be included in the head will not be, and the document.ready, came and went before the content got loaded.
  // console.log(` about to call ${APICALLURL_GETFRONTPAGEPOSTS}`);

  const frontPagePosts = yield select(makeSelectFrontPagePosts());
  const doWeHaveDataYet = frontPagePosts !== false;
  const areWeLoading = yield select(makeSelectLoading());

  // // so ... here is the problem ... we need to refresh the ad data.
  if (!doWeHaveDataYet && !areWeLoading) {// hack to always load, because we might have to overwrite the ads data, and this is the only way to do it

    yield put(loadFrontPagePosts());// next time areWeLoading will be true, until success or failure, and then doWeHaveDataYet might be different.

    try {
      const someHomeStartData = yield call(request, APICALLURL_GETFRONTPAGEPOSTS);
      //console.log(`finished call to APICALLURL_GETHOMESTART`);
      yield put(loadFrontPagePostsSuccess(someHomeStartData));
    } catch (e) {
      yield put(loadFrontPagePostsFailure());
    }
  } else {
    console.log(`what are we doing here?`);
  }


}


export default function* homePageSaga() {
  // why not, instead of making each one of these sagas check to see if it is on the clinet ort server, simply check here, and only call them if/when we need to. as opposed to always calling them, and leaving it up toi them wether or not they participate, based on whether they are on the client or server.
  console.log(`homePageSaga()`);

  if (isServer()) {
    yield firstLoadSaga();
  } else {

    yield firstLoadSaga();// we have to call it here, in case we are not arriving on this page, on first load
    // any other sagas that we want to have happen on the home page.

  }

}
