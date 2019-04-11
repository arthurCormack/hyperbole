const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const react = require('react');

const reactDOMServer = require("react-dom/server");
const loadableServer = require("@loadable/server");

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



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
    // const nodeExtractor = new loadableServer.ChunkExtractor({
    //   statsFile: nodeStats
    // });
    // console.log(`nodeExtractor`, nodeExtractor);
    // const {
    //   default: App
    // } = nodeExtractor.requireEntrypoint();
    // const webExtractor = new loadableServer.ChunkExtractor({
    //   statsFile: webStats
    // });

    // // const jsx = webExtractor.collectChunks(<App />)
    // const jsx = webExtractor.collectChunks(react.createElement(App, null));
    // const html = renderToString(jsx);

    // // fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    // //   if (err) {
    // //     res.sendStatus(404);
    // //   } else {
    // //     res.send(file.toString());
    // //   }
    // // });
    // // we can't do this here. because we have no way of rendering things like helmet head tags properly. that has to be something that is done in the full rende, similar to how we have donw it before, in previous ssr. which actually does work.
    // res.send(`<!DOCTYPE html>
    //   <html>
    //   <head>
    //   ${webExtractor.getLinkTags()}
    //   ${webExtractor.getStyleTags()}
    //   </head>
    //   <body>
    //     <div id="main">${html}</div>
    //     ${webExtractor.getScriptTags()}
    //   </body>
    //   </html>`);

    
  });
};
