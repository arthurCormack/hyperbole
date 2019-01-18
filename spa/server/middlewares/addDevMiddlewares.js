const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const httpProxy = require('http-proxy');
// no DLL anymore!
const renderServiceProxyPort = require('../devRenderService').port;
// we are making the assumption that while in dev mode, we will running off of localhost.
// this might not always be the case, so if it was not running off of localhost, you would need to change this renderServiceUrl.
const renderServiceUrl = `http://localhost:${renderServiceProxyPort}`;

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
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
          }, 1000);
        </script>
        </html>
      `);
    });
  };
}

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

  // app.get('*', (req, res) => {
  //   fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
  //     if (err) {
  //       res.sendStatus(404);
  //     } else {
  //       res.send(file.toString());
  //     }
  //   });
  // });
  app.use(createServerRenderProxyMiddleware(renderServiceUrl));// defined as const renderServiceUrl near top of this file

};
