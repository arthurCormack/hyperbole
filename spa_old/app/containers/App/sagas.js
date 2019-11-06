/*
  * Dynamic Sagas groups together the sagas for various dynamic elements that would otherwise have to be included / composed
  * over and over again on route containers. This way we keep things a little DRYer and ease the pain.
  * so instead of each route container having to include multiple dynamic sagas, they only need to include this - for the common sagas that appear on every page.
  *
*/
// IMPORT OTHER GLOBAL DYNAMIC SAGAS
import { delay } from 'redux-saga'
import { take, call, all, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';


export function* demonKeeperSaga() {
  console.log(`demonKeeperSaga`);
  // now longer adOverlordSaga, because it also forks other stuff too, like the getPageviewDatalayerPusher
  // we need to keep some kind of keyed array - keys for channels - corresponding to different kinds of ads that are appearing.
  // const adWatcher = yield fork(getAdWatcher);
  // const galleryWatcher = yield fork(getGalleryWatcher);
  // // const pageviewDatalayerPusher = yield fork(getPageviewDatalayerPusher);
  
}
export function* AppSagas() {
  console.log(`AppSagas()`);
  yield all([
    demonKeeperSaga(),
  ]);

}
export default AppSagas;
