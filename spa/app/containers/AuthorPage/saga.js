// import takeLatest, { delay } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
// Individual exports for testing
import request from 'utils/request';
import { loadAuthor, loadAuthorSuccess, loadAuthorFailure, loadAuthorPosts, loadAuthorSuccessPosts, loadAuthorFailurePosts, zeroAuthor } from './actions';
import { setAllAdsContentCycleSafety } from 'containers/App/actions';

import { selectAuthor, selectSlug, selectPosts, selectCurrentlyDisplayedChunkIndex, selectInitialPageNumber, selectLoading } from './selectors';
import { makeSelectLocationState, makeSelectLoading } from 'containers/App/selectors';
import { TRIGGER_LOAD_MORE_AUTHOR_POSTS } from './constants';
import { msg } from 'utils/msg';
// import { LOAD_AUTHOR, LOAD_AUTHOR_SUCCESS, LOAD_AUTHOR_FAILURE, ZERO_AUTHOR } from 'containers/App/constants';

export function* defaultSaga() {
  return;
}

import { APICALLURL_GETAUTHORPAGE, APICALLURL_GETADDITIONALAUTHORPOSTS } from 'containers/App/constants';

export function* getAuthor() {
  const locationState = yield select(makeSelectLocationState());
  const somePermalink = locationState.locationBeforeTransitions.pathname;
  const somePathArray = somePermalink.split('/');
  if(somePathArray[somePathArray.length - 1] == ''){
   somePathArray.pop();
  }
  const someAuthorSlug = somePathArray[somePathArray.length - 1];
  const storedAuthorSlug = yield select(selectSlug());
  const storedPosts = yield select(selectPosts());

  if (someAuthorSlug !== storedAuthorSlug) {

    yield put(zeroAuthor());
    const requestURL = `${APICALLURL_GETAUTHORPAGE}/${someAuthorSlug}`;// hard-coded for now. replace with the domain of the current site, from environment vars.
    // we might want to consider de-bouncing this?! nah. takeLatest handles this i think
    console.log(`requestURL==${requestURL}`);
    yield put(loadAuthor());
    try {
      const someAuthorData = yield call(request, requestURL);
      yield put(loadAuthorSuccess(someAuthorData));
    } catch(err){
      yield put(loadAuthorFailure());
    }
  }
}


// set up a watcher that will take LOAD_MORE_AUTHORPOSTS action
// if we are already loading stuff, then bail out, and wait
// it will have to figure out how many chunks we currently have, and the make a call to the api to load the next chunk
// when we get the response, then we will yield put (dispatches an action) that will pass along the new posts that we have received.
// we will need to define a new reducer thing for this action that will append those new posts to state
function* getTriggerLoadMoreAuthorPostsWatcher() {



  while (true) {
    const someLoadMoreAction = yield take(TRIGGER_LOAD_MORE_AUTHOR_POSTS);
    // msg(`getTriggerLoadMoreAuthorPostsWatcher take(TRIGGER_LOAD_MORE_AUTHOR_POSTS)`);
    const isLoading = yield select(selectLoading());
    // msg(`isLoading == ${isLoading}`);
    if (isLoading) {

    } else {

      const locationState = yield select(makeSelectLocationState());
      const somePermalink = locationState.locationBeforeTransitions.pathname;

      const somePathArray = somePermalink.split('/');
      if(somePathArray[somePathArray.length - 1] == ''){
       somePathArray.pop();
      }

      const someAuthorSlug = somePathArray[somePathArray.length - 1];
      const storedAuthorSlug = yield select(selectSlug());
      const storedPosts = yield select(selectPosts());
      if (storedPosts !== null) {
        const postPerChunk = 12;
        const currentChunkNum = storedPosts.length / postPerChunk;
        const nextChunkNum = currentChunkNum;
        const requestURL = `${APICALLURL_GETADDITIONALAUTHORPOSTS}/${someAuthorSlug}/${nextChunkNum}`;// hard-coded for now. replace with the domain of the current site, from environment vars.
        // we might want to consider de-bouncing this?! nah. takeLatest handles this i think
        console.log(`requestURL==${requestURL}`);
        yield put(loadAuthor());
        try {
          const someAuthorPostsData = yield call(request, requestURL);
          yield put(loadAuthorSuccessPosts(someAuthorPostsData));
        } catch(err){
          yield put(loadAuthorFailurePosts());
        }

      }

    }
  }
}

export function* authorPageSaga() {
  const triggerLoadMoreAuthorPostsWatcher = yield fork(getTriggerLoadMoreAuthorPostsWatcher);
  yield call(getAuthor);
  yield put(setAllAdsContentCycleSafety(true));

  yield take(LOCATION_CHANGE);// this doesn't seem to work, and I think that the reason is because ... ???
  yield cancel(triggerLoadMoreAuthorPostsWatcher);
  // msg(`end authorPageSaga`);
}

export default authorPageSaga;
