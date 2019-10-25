/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

function trimURLPrefix(someURL) {
  // remove the http:// or https:// and place simply a // prefix
  // const result = someURL.replace(/(^\w+:|^)\/\//, '');
  // return '//' + result;
  return someURL;
}

export const API_ENPOINT_PREFIX = 'wp-json/hyperbole/v1';
const someServerApiURL = typeof process.env.SERVER_API_URL === 'string' ? trimURLPrefix(process.env.SERVER_API_URL) : trimURLPrefix(process.env.API_URL);
export const BASE_URL = typeof window !== 'undefined' ? `${trimURLPrefix(process.env.API_URL)}` : `${someServerApiURL}`;
export const API_URL = typeof window !== 'undefined' ? `${trimURLPrefix(process.env.API_URL)}/${API_ENPOINT_PREFIX}` : `${someServerApiURL}/${API_ENPOINT_PREFIX}`;

export const DEFAULT_LOCALE = 'en';
export const CREATE_CB = 'hyperbole/App/CREATE_CB';