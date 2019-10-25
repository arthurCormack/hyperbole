/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

import { API_URL } from 'containers/App/constants';

export const LOAD_HOMEPAGE_INITIALPOSTS = 'boilerplate/Home/LOAD_HOMEPAGE_INITIALPOSTS';
export const LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS = 'boilerplate/Home/LOAD_HOMEPAGE_INITIALPOSTS_SUCCESS';
export const LOAD_HOMEPAGE_INITIALPOSTS_FAILURE = 'boilerplate/Home/LOAD_HOMEPAGE_INITIALPOSTS_FAILURE';

export const APICALLURL_GETINITIALPOSTS = `${API_URL}/getrecentposts`;