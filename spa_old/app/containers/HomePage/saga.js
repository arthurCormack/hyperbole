/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, take, fork, cancel } from 'redux-saga/effects';
// import { LOAD_REPOS } from 'containers/App/constants';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

// /**
//  * Github repos request/response handler
//  */
// export function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

// /**
//  * Root saga manages watcher lifecycle
//  */
// export default function* githubData() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }
import { isServer } from 'utils/detection';

import { loadHomePageInitialPosts, loadHomePageInitialPostsSuccess, loadHomePageInitialPostsFailure } from './actions';
import {
  makeSelectInitialPosts,
} from './selectors';

import { APICALLURL_GETINITIALPOSTS } from './constants';

function* getInitialPosts() {
  // if we already have the initial posts, then don't get them.
  // check in state to see if we have posts, with a select.
  // also, don't call them if we already have them.
  //
  console.log(`getInitialPosts()`);

  const initialPosts = yield select(makeSelectInitialPosts());
  console.log('initialPosts', initialPosts);
  // const initialPosts2 = yield select(makeSelectInitialPostsPosts());
  const doWeHaveDataYet = initialPosts.posts !== false;
  const areWeLoading = initialPosts.loading;
  
  console.log(initialPosts, doWeHaveDataYet, areWeLoading);

  if (!doWeHaveDataYet && !areWeLoading) {// hack to always load, because we might have to overwrite the ads data, and this is the only way to do it
    yield put(loadHomePageInitialPosts());// next time areWeLoading will be true, until success or failure, and then doWeHaveDataYet might be different.
    try {
      console.log(`attempting to fetch ${APICALLURL_GETINITIALPOSTS}`);
      const someInitialPostsData = yield call(request, APICALLURL_GETINITIALPOSTS);
      console.log(`someInitialPostsData:`, someInitialPostsData);
      yield put(loadHomePageInitialPostsSuccess(someInitialPostsData));
    } catch (e) {
      console.log(e);
      yield put(loadHomePageInitialPostsFailure());
    }
  } else {
    console.log(`what are we doing here?`);
  }

  return;
}
function* homePageSaga() {
  console.log('homePageSaga!!!!!!!!!');
  // if (yield call(isServer)) {
  if(isServer) {
    yield call(getInitialPosts);
  } else {
    yield call(getInitialPosts);
  }
  return;
}

export default homePageSaga;