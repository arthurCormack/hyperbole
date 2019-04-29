/* eslint-disable global-require */
// require('isomorphic-fetch');// do we need this if we have whatwg-fetch?
// require('whatwg-fetch');
require('unfetch');
// I think we need to import the loadable-stats.json
// 

// import { ChunkExtractor } from '@loadable/server'
// const ChunkExtractor = require('@loadable/server').ChunkExtractor;

// const reactDOMServer = require("react-dom/server");
const path = require('path');

// const loadableServer = require("@loadable/server");

const nodeStats = path.resolve(__dirname, 'loadable-stats.json'); // in server/
const webStats = path.resolve(process.cwd(), 'build/loadable-stats.json');

const assets = require('./generated.assets.json'); // eslint-disable-line import/no-unresolved

const serverEntry = require('./generated.serverEntry'); // eslint-disable-line import/no-unresolved



// const environment = require('./environment.json'); // eslint-disable-line import/no-unresolved

// const renderAppToStringAtLocation = serverEntry.renderAppToStringAtLocation;
// const appLocales = serverEntry.appLocales;

const { renderAppToStringAtLocation, appLocales } = serverEntry;

// function extractWebpackDllNamesFromPackage() {
//   if (process.env.NODE_ENV === 'production') return [];

//   const dllPlugin = require('./dllPlugin');
//   return dllPlugin.dlls ? Object.keys(dllPlugin.dlls) : ['reactBoilerplateDeps'];
// }


function printError(e) {
  console.error((e.stack && e.stack) || e); // eslint-disable-line no-console
}

module.exports = function handleSSR(req, res) {
  console.log(`handleSSR()`);
  const options = {
    assets,
    nodeStats,
    webStats,
    // webpackDllNames: extractWebpackDllNamesFromPackage(),
    lang: req.acceptsLanguages(appLocales),
    // environment,
  };

  renderAppToStringAtLocation(req.url, options, (response) => {
    
    if (response.error) {
      res.status(500).send(response.error.message);
      printError(response.error);
    } else if (response.redirectLocation) {
      res.redirect(302, response.redirectLocation);
    } else if (response.notFound) {
      res.status(404).send(response.html);
    } else if (typeof response.caardd === 'object') {// remember, typeof null === 'object'
      if (response.caardd.notFound) {
        if (response.caardd.redirectLocation) {
          res.redirect(301, response.caardd.redirectLocation);
        } else {
          res.status(404).send(response.html);// but ... we want to render the 404 route ... ok ... the route reducer will do that, if it gets a notFound from the COntent Authority
        }
      }
    } else {
      res.status(200).send(response.html);
    }
  });
};
