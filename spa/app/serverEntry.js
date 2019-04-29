/**
 * Server side rendering application entry module.
 *
 * This module is being transpiled by webpack and placed under
 * server/middlewares/ as `generated.serverEntry.js`.
 *
 * The server uses it to render the app at given location.
 */
// import 'babel-polyfill'; // for regeneratorRuntime
import '@babel/polyfill'; // for regeneratorRuntime

import React from 'react';

import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

import { Provider } from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';


import { ConnectedRouter } from 'connected-react-router';

import { createMemoryHistory } from 'history';


import htmlescape from 'htmlescape';

import { END } from 'redux-saga';
import { Helmet } from 'react-helmet';
// import styleSheet from 'styled-components/lib/models/StyleSheet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

// Global styles should be injected before any other scoped style, so make sure
// this file is imported before any styled component.
import 'global-styles';

import createStore from 'configureStore';

// import createRoutes from 'routes';// so ... this is no longer a function, its a simple array
import Routes from 'routes';// so ... this is no longer a function, its a simple array

// import { history } from 'utils/history';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

import HtmlDocument from 'components/HtmlDocument';

import { changeLocale } from 'containers/LanguageProvider/actions';

import monitorSagas from 'utils/monitorSagas';

import { appLocales, translationMessages as messages} from './i18n';



function renderAppToString(url, store, history, styleSheet, extractor ) {
  console.log(`renderAppToString()`);

  const app = styleSheet ? (
    <ChunkExtractorManager extractor={extractor}>
      <StyleSheetManager sheet={styleSheet.instance}>
        <Provider store={store}>
          <LanguageProvider messages={messages}>
            <ConnectedRouter history={history}>
              <div>{renderRoutes(Routes)}</div>
            </ConnectedRouter>
          </LanguageProvider>
        </Provider>
      </StyleSheetManager>
    </ChunkExtractorManager>
  ) : (
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <div>{renderRoutes(Routes)}</div>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>
  );

  // return renderToString(
  //   styleSheet ? styleSheet.collectStyles(app) : app
  // );
  return renderToString(
    app
  );
}


// store, sagasDone, assets, webpackDllNames
async function renderHtmlDocument({ url, store, sagasDone, assets, webpackDllNames, memHistory, nodeStats, webStats }) {// renderProps is always going to be App.
  // woo hoo, we now have nodeStats, webStats! we should now be able to get on with the chunk collection!
  console.log( `renderHtmlDocument()`);
  // console.log(`This is a Helmet`, Helmet);
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  // const { default: App } = nodeExtractor.requireEntrypoint();// this is the main thing. the entryPoint in the main. we need to pass this along?
  // this is why we aren't getting the styles ... because we have to make it render this App thing!
  const webExtractor = new ChunkExtractor({ statsFile: webStats })
  // huh ... what comes next ...
  
  // const jsx = webExtractor.collectChunks(<App />) !!!
  // const html = renderToString(jsx)
  // 1st render phase - triggers the sagas
  renderAppToString(url, store, memHistory, null, null);// one

  // the thing is, with the way that the sagas,
  // send signal to sagas that we're done
  // do we really want to do 2 renders here?
  // we need to if we are going to have any dynamic sagas inside that load data.
  //  we need to make a decision to either only have dynamic data triggered in loading functions, and disable other ones during ssr.


  store.dispatch(END);

  // wait for all tasks to finish
  await sagasDone();

  // capture the state after the first render, or after loadCOntent promises are resolved,
  const state = store.getState();
  // prepare style sheet to collect generated css
  const sheet = new ServerStyleSheet();

  // 2nd render phase - the sagas triggered in the first phase are resolved by now
  const appMarkup = renderAppToString(url, store, memHistory, sheet, webExtractor);// two
  // console.log(`appMarkup ...`);
  // console.log(appMarkup);

  // should we dispathc END again, and await sagasDone, again? let's try.
  // store.dispatch(END);
  // await sagasDone();

  // capture the generated css
  // const jsx = webExtractor.collectChunks(<App />)
  // const html = renderToString(jsx)
  // ${webExtractor.getLinkTags()}
  // ${webExtractor.getStyleTags()}
  // ${webExtractor.getScriptTags()}

  const css = sheet.getStyleTags();
  sheet.seal();
  // try {
  //   const html = renderToString(sheet.collectStyles(<YourApp />))
  //   const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
  // } catch (error) {
  //   // handle error
  //   console.error(error)
  // } finally {
  //   sheet.seal()
  // }

  console.log(`css`, css);
  // const css = webExtractor.getStyleTags();// is it because they are styled-components? maybe
  // console.log(`css`, css);

  const links = webExtractor.getLinkTags();
  console.log(`links`, links);

  const scripts = webExtractor.getScriptTags();
  console.log(`scripts`, scripts);

  // const doc = renderToStaticMarkup(
  //   <HtmlDocument
  //     appMarkup={appMarkup}
  //     lang={state.language.locale}
  //     state={state}
  //     head={Helmet.renderStatic()}
  //     assets={assets}
  //     css={css}
  //     links={links}
  //     scripts={scripts}
  //   />
  // );
  // return `<!DOCTYPE html>\n${doc}`;
  const t = new Date();
  const timstamp = `${t.toISOString()}`;
  // const doc = renderToStaticMarkup(
  //   <html>
  //     <head>
  //       <meta charSet="utf-8" />
  //       <meta name="ssr-timestamp" content={timstamp} />
  //       <meta name="google-site-verification" content="insert-your-google-site-verification-or-remove-this-tag" />
  //       {/* Allow installing the app to the homescreen */}
  //     </head>
  //     <body>
  //       Hello World! {timstamp}
  //     </body>
  //   </html>
  // );
  const head = Helmet.renderStatic();
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

  // const html = `<html lang=${state.language.locale}>`;

  // const html = `<html lang=${lang}>
  //     <head>
  //       <meta charSet="utf-8" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <meta name="ssr-timestamp" content=${timstamp} />
  //       <meta name="google-site-verification" content="insert-your-google-site-verification-or-remove-this-tag" />
  //       ${/* Allow installing the app to the homescreen */}

  //       <link rel="manifest" href="/manifest.json" />
  //       <meta name="mobile-web-app-capable" content="yes" />
  //       <meta name="apple-mobile-web-app-title" content="Everything Zoomer" />

  //       ${/* iOS home screen icons */}
  //       <link rel="apple-touch-icon" sizes="120x120" href="/icon-120x120.png" />
  //       <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
  //       <link rel="apple-touch-icon" sizes="167x167" href="/icon-167x167.png" />
  //       <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
  //       <link rel="icon" href="/favicon.ico" />

  //       ${head.title.toString()}
  //       ${head.meta.toString()}
  //       ${head.link.toString()}
  //       ${/* figure out how to include the manifest proper;ly, and maybe we won't need to include all those links to apple touch icons above */}
  //       ${/* vendor.css */}
  //       <link href={assets.main.css} rel="stylesheet" />
  //       ${/* app css */}
  //       ${/* <style type="text/css" dangerouslySetInnerHTML={{ __html: css }} /> */}
  //       ${/* server side rendered css style tags */}
  //       { css }
  //     </head>
  //     <body>

  //       ${/* Display a message if JS has been disabled on the browser. */}
  //       <noscript>
  //         If you are seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>
  //         , please <strong>enable JS</strong> to make this app work.
  //       </noscript>

  //       <div id="app">
  //         ${/* our app markup */}
  //         ${appMarkup}
  //       </div>

  //       ${/* our app state */}
       
  //       <script APP_STATE = ${htmlescape(state)} />
  //       ${/* dev only */}

  //       ${/* our app code */}
  //       ${/* <script type="text/javascript" src={assets.main.js}></script> */}
  //       ${scripts}

  //       ${/* see app/setup/openSansObserver.js */}
  //       <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />  
  //     </body>
  //   </html>`;
}


function getCAARDD(store) {
  console.log(`getCAARDD()`);
  // console.log(store.getState());
  // const caardd = typeof store.getState().getIn(['global', 'caardd']) !== 'undefined' ? store.getState().getIn(['global', 'caardd']) : false;
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
      // console.log(`matchedRoute for ${url}... `);
      // console.log(route);
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
    // const context = {};
    // const content = renderer(req, store, context);

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

export {
  appLocales,
  renderAppToStringAtLocation,
};
