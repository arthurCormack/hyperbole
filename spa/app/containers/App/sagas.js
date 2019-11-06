/* eslint-disable no-console */
/*
 * Dynamic Sagas groups together the sagas for various dynamic elements that would otherwise have to be included / composed
 * over and over again on route containers. This way we keep things a little DRYer and ease the pain.
 * so instead of each route container having to include multiple dynamic sagas, they only need to include this - for the common sagas that appear on every page.
 *
 */
// IMPORT OTHER GLOBAL DYNAMIC SAGAS
import { call, all, put, select, take, fork } from 'redux-saga/effects';
import request from 'utils/request';
// import {
 
// } from './actions';
// import {
  
// } from './constants';

// import {
  
// } from './selectors';

function* demonKeeperSaga() {
  console.log(`demonKeeperSaga`);
}
export function* AppSagas() {
  console.log(`AppSagas()`);
  // yield all([demonKeeperSaga()]);
}
export default AppSagas;
