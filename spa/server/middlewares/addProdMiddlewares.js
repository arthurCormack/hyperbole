const path = require('path');
const express = require('express');
const compression = require('compression');

// const handleSSR = require('./handleSSR');


module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // a small function that makes sure that the request path is actually valid; sometimes it is not so.
  // Ideally, this would instead of being done here,
  // which has a footprint, it would be done at a WAF (Web Application Firewall instead)
  // app.use(function(req, res, next) {
  //   let err = null;
  //   try {
  //     decodeURIComponent(req.path);
  //   } catch (e) {
  //     err = e;
  //   }
  //   if (err) {
  //     console.log(err, req.url);
  //     return res.status(404).redirect(['http://', req.get('Host'), '/404'].join(''));
  //   }
  //   next();
  // });

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
