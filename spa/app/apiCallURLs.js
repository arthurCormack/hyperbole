import { isServer } from 'utils/detection';

function trimURLPrefix(someURL) {
  // remove the http:// or https:// and place simply a // prefix
  // const result = someURL.replace(/(^\w+:|^)\/\//, '');
  // return '//' + result;
  return someURL;
}

// we might have a different SERVER_API_URL than API_URL, for example in the case where the SERVER_API_URL is in a VPC that is only accessible to the server, but not the client.
const someServerApiURL =
  typeof process.env.SERVER_API_URL === 'string'
    ? process.env.SERVER_API_URL
    : process.env.API_URL;

export const API_ENPOINT_PREFIX = 'wp-json/hyperbole/v1';
export const BASE_URL = isServer() ? `${someServerApiURL}` : `${process.env.API_URL}`;

export const API_URL = isServer()
  ? `${someServerApiURL}/${API_ENPOINT_PREFIX}`
  : `${process.env.API_URL}/${API_ENPOINT_PREFIX}`;

export const APICALLURL_GETFRONTPAGEPOSTS = `${API_URL}/getfrontpageposts`;
