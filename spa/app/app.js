/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */


import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

import { loadableReady } from '@loadable/component'

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import configureStore from './configureStore';

// Import i18n messages
import { appLocales, translationMessages as messages } from './i18n';

import renderInBrowser from './renderInBrowser';
import Routes from './routes';// so ... this is no longer a function, its a simple array

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});


// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

// console.log(`app.js!`);
loadableReady(() => {
  // console.log(`loadableReady()`);
  // ReactDOM.hydrate(
  // <Provider store={store}>
  //   <LanguageProvider messages={translationMessages}>
  //     <ConnectedRouter history={history}>
  //       <App />
  //     </ConnectedRouter>
  //   </LanguageProvider>
  // </Provider>, MOUNT_NODE)
  renderInBrowser({ messages, store, Routes, history });
});

// const render = messages => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <LanguageProvider messages={messages}>
//         <ConnectedRouter history={history}>
//           <App />
//         </ConnectedRouter>
//       </LanguageProvider>
//     </Provider>,
//     MOUNT_NODE,
//   );
// };
function render() {
  renderInBrowser({ messages, store, Routes, history });
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(messages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        // import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(messages))
    .catch(err => {
      throw err;
    });
} else {
  render(messages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
