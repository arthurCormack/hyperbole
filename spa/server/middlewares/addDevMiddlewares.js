const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const react = require('react');

const httpProxy = require('http-proxy');
const renderServiceProxyPort = require('../devRenderService').port;

const renderServiceUrl = `http://localhost:${renderServiceProxyPort}`;

// import { renderToString } from 'react-dom/server'
// import { ChunkExtractor } from '@loadable/server'

const reactDOMServer = require("react-dom/server");
const loadableServer = require("@loadable/server");

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// so ... change the addDevService Middleware,
// and also change the handleSSR, so that the handleSSR does the work of chunk collecting?!



function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    writeToDisk(filePath) {
      return /server/.test(filePath) || /build/.test(filePath);
    },
    silent: true,
    stats: 'errors-only',
  });
}

function createServerRenderProxyMiddleware(serviceUrl) {
  const renderProxy = httpProxy.createProxyServer({});
  return function serverRenderMiddleware(req, res) {
    renderProxy.web(req, res, { target: serviceUrl }, (error) => {
      if (!error || error.code !== 'ECONNREFUSED') {
        console.error('Render proxy failed', error); // eslint-disable-line no-console
      }
      console.log(`serverRenderMiddleware error: ${error}`);
      res.header('Content-Type', 'text/html');
      res.status(500).send(`
        <html>
        <body>Proxying failed for page rendering service,<br>
        The service maybe restarting so the page is going to be reloaded.<br>
        Check the console for more information.</body>
        <script>
        setTimeout(function() {
          window.location.reload(true);
        }, 1337);
        </script>
        </html>
      `);
    });
  };
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 2000,
  }));
  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.use(createServerRenderProxyMiddleware(renderServiceUrl));// defined as const renderServiceUrl near top of this file (line 9)
};

/*
module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  const nodeStats = path.resolve(__dirname, 'loadable-stats.json');// in server/
  const webStats = path.join(compiler.outputPath, 'loadable-stats.json');


  app.get('*', (req, res) => {
    // console.log(`nodeStats`, nodeStats);
    const nodeExtractor = new loadableServer.ChunkExtractor({
      statsFile: nodeStats
    });
    // console.log(`nodeExtractor`, nodeExtractor);
    const {
      default: App
    } = nodeExtractor.requireEntrypoint();
    const webExtractor = new loadableServer.ChunkExtractor({
      statsFile: webStats
    });

    // const jsx = webExtractor.collectChunks(<App />)
    const jsx = webExtractor.collectChunks(react.createElement(App, null));
    const html = renderToString(jsx);

    // fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    //   if (err) {
    //     res.sendStatus(404);
    //   } else {
    //     res.send(file.toString());
    //   }
    // });
    // we can't do this here. because we have no way of rendering things like helmet head tags properly. that has to be something that is done in the full rende, similar to how we have donw it before, in previous ssr. which actually does work.
    res.send(`<!DOCTYPE html>
      <html>
      <head>
      ${webExtractor.getLinkTags()}
      ${webExtractor.getStyleTags()}
      </head>
      <body>
        <div id="main">${html}</div>
        ${webExtractor.getScriptTags()}
      </body>
      </html>`);
  });
};
*/
