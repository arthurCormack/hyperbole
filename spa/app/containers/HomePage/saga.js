/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

mport { loadHomePageInitialPosts, loadHomePageInitialPostsSuccess, loadHomePageInitialPostsFailure } from './actions';
import {
  makeSelectInitialPosts,
} from './selectors';

import { APICALLURL_GETINITIALPOSTS, LOAD_HOMEPAGE_INITIALPOSTS } from './constants';


function* getInitialPosts() {
  // if we already have the initial posts, then don't get them.
  // check in state to see if we have posts, with a select.
  // also, don't call them if we already have them.

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

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // consider an alteration to the pattern. let the action that we takeLatest for be the trigger, instead of the announcement that it has commenced.
  // and let the container trigger it with a useDispatch, if it loads without the latest stuff.
  
  // yield takeLatest(LOAD_HOMEPAGE_INITIALPOSTS, getInitialPosts);
  yield call(getInitialPosts);
}
