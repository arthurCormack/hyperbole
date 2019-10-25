/**
 * Server side rendering application entry module.
 *
 * This module is being transpiled by webpack and placed under
 * server/middlewares/ as `generated.serverEntry.js`.
 *
 * The server uses it to render the app at given location.
 */

// import '@babel/polyfill'; // for regeneratorRuntime
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';


import React from 'react';

import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

import { Provider } from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';


import { ConnectedRouter } from 'connected-react-router';

import { createMemoryHistory } from 'history';

import htmlescape from 'htmlescape';

import { END } from 'redux-saga';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import styleSheet from 'styled-components/lib/models/StyleSheet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

// Global styles should be injected before any other scoped style, so make sure
// this file is imported before any styled component.
// import 'global-styles';
// maybe the solution for the style flash, is to inject the global styles in the head, when we build out the doc.

import createStore from 'configureStore';

import Routes from 'routes';// so ... this is no longer a function, its a simple array

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

import { changeLocale } from 'containers/LanguageProvider/actions';

import monitorSagas from 'utils/monitorSagas';

import { appLocales, translationMessages as messages} from './i18n';


function renderAppToString(url, store, history, styleSheet, extractor ) {
  const helmetContext = {};
  const app = styleSheet ? (
    <ChunkExtractorManager extractor={extractor}>
      <StyleSheetManager sheet={styleSheet.instance}>
        <Provider store={store}>
          <LanguageProvider messages={messages}>
            <ConnectedRouter history={history}>
              <HelmetProvider context={helmetContext}>
                <div>{renderRoutes(Routes)}</div>
              </HelmetProvider>
            </ConnectedRouter>
          </LanguageProvider>
        </Provider>
      </StyleSheetManager>
    </ChunkExtractorManager>
  ) : (
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <HelmetProvider context={helmetContext}>
            <div>{renderRoutes(Routes)}</div>
          </HelmetProvider>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>
  );
  // return renderToString(
  //   app
  // );
  return {
    appString: renderToString(app),
    helmetContext,
  }
}


// store, sagasDone, assets, webpackDllNames
async function renderHtmlDocument({ url, store, sagasDone, assets, webpackDllNames, memHistory, nodeStats, webStats }) {// renderProps is always going to be App.
  console.log(`renderHtmlDocument()`)
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });

  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  // 1st render phase - triggers the sagas
  renderAppToString(url, store, memHistory, null, null);// one

  // the thing is, with the way that the sagas,
  // send signal to sagas that we're done
  // do we really want to do 2 renders here?
  // we need to if we are going to have any dynamic sagas inside that load data.
  //  we need to make a decision to either only have dynamic data triggered in loading functions, and disable other ones during ssr.

  // This seems to be not working anymore, because of the way that we have done the sagas.
  store.dispatch(END);

  // wait for all tasks to finish
  await sagasDone();
  // this does not seem to be happening here!
  /**
   * 
   * store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
   */

  // capture the state after the first render, or after loadCOntent promises are resolved,
  const state = store.getState();

  console.log(`between renderAppToStrings, state:`, state);
  // prepare style sheet to collect generated css
  const sheet = new ServerStyleSheet();

  // 2nd render phase - the sagas triggered in the first phase are resolved by now
  const appObj = renderAppToString(url, store, memHistory, sheet, webExtractor);
  // const appMarkup = renderAppToString(url, store, memHistory, sheet, webExtractor);
  const appMarkup = appObj.appString;
  const head = appObj.helmetContext.helmet;
  // console.log(`head`, head);
  // capture the generated css
  const css = sheet.getStyleTags();
  sheet.seal();

  const links = webExtractor.getLinkTags();
  // console.log(`links`, links);

  const scripts = webExtractor.getScriptTags();
  // console.log(`scripts`, scripts);

  const t = new Date();
  const timstamp = `${t.toISOString()}`;
  // const head = Helmet.renderStatic();// not a function here!
  const doc = `<html>
    <head>
      <meta charSet="utf-8" />
      <meta name="ssr-timestamp" content=${timstamp} />
      <meta name="google-site-verification" content="insert-your-google-site-verification-or-remove-this-tag" />
      ${css}
      ${head.title.toString()}
      ${head.meta.toString()}
      ${head.link.toString()}
    </head>
    <body>
      <div id="app">
        ${appMarkup}
      </div>
      <script>APP_STATE = ${htmlescape(state)}</script>
      ${scripts}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" /> 
    </body>
  </html>
  `;
  return `<!DOCTYPE html>\n${doc}`;
}


function getCAARDD(store) {
  console.log(`getCAARDD()`);
  const caardd = store.getState().global.caardd;
  console.log(caardd);
  return caardd;
}

// this is the entry point that gets called from handleSSR. we are going to use react-router-config
// and switch the structure of the containers export so that it exports an object that has both loader and compoentn params.


function renderAppToStringAtLocation(url, { assets, nodeStats, webStats, lang }, callback) {
  /*
    we should now have
    nodeStats,
    webStats,
    passed in, from the handleSSR
  */
  console.log(`renderAppToStringAtLocation()`);
  const memHistory = createMemoryHistory({
    initialEntries: [url],
    initialIndex: 0,
    keyLength: 6,
  });

  const store = createStore({}, memHistory);

  const sagasDone = monitorSagas(store);

  // maybe if we dispatch a LOCATION_CHANGE to the store, with memHistory?!
  store.dispatch(changeLocale(lang));

  const promises = matchRoutes(Routes, url)
    .map(({ route }) => {
      // we could call the loadData function here, but inport another function result, from the saga, that would deduce the computed url that we are supposed to calls
      // thats the problem, the saga has the job of extracting slug items from the url path, and putting together a complete url to call the api with;
      // ont that passes all of the permalink items required to make a successful api call.catch((//) => {})
      return route.loadContent ? route.loadContent(store) : null;
      // return null;// what if we don't run the loadData ... what if our saga will do it for us?
    })
    .map(promise => {
      // console.log(``);
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  // console.log(promises);// why is the first one undefined? does that matter?
  // do we need to collect state / store first?
  Promise.all(promises).then(() => {
    renderHtmlDocument({ url, store, sagasDone, assets, memHistory, nodeStats, webStats })
      .then((html) => {
        // const notFound = is404(renderProps.routes);// is404 only looks at matching route patterns, but doesn't care what the Content Authority thinks about whether a route exists or not, or whether there is a redirection
        const notFound = null;
        const caardd = getCAARDD(store);
        callback({ html, notFound, caardd });// this is where we pass the CAARDD
      })
      .catch((e) => callback({ error: e }));
  });
}

export { appLocales, renderAppToStringAtLocation };