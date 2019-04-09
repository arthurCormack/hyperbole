const path = require('path');// 
// const express = require('express');

const reactDOMServer = require("react-dom/server");
const loadableServer = require("@loadable/server");

// const publicPath = options.publicPath || '/';
// const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

// where do we expect to find the files?

// const nodeStats = _path.default.resolve(__dirname, '../../public/dist/node/loadable-stats.json');
// const webStats = _path.default.resolve(__dirname, '../../public/dist/web/loadable-stats.json');

module.exports = function addChunkExtractorMiddleware(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) =>
      res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};