/* eslint-disable strict,global-require,no-console */

'use strict';

const path = require('path');
const express = require('express');
const http = require('http');
const appPort = require('./port');
const port = exports.port = appPort + 1;
const chalk = require('chalk');
const enableDestroy = require('server-destroy');

const debug = console.log.bind(console, chalk.cyan('[ssr service]'));

function ensureAllGeneratedFilesExist() {
  // but now, instead of looking into generated.assets.json, we instead want to look into loadable-stats
  console.log(`ensureAllGeneratedFilesExist()`);
  // we need to look in the build directory, to find the generated.assets.json.
  // how do we ensure that the build phase has completed before this phase? we might have to change the build script to make them build in sequence.
  // import the loadable-stats.json from the build dir, and then extract an array of things to load in. all the chunks, all the css.
  const modules = [
    path.join(__dirname, 'middlewares', 'generated.assets.json'),
    path.join(__dirname, 'middlewares', 'generated.serverEntry'),
  ];

  let modulePath;
  try {
    for (modulePath of modules) { // eslint-disable-line no-restricted-syntax
      console.log(`modulePath==${modulePath}`);// all that this means is that the serverEntry has some sort of error in it.

      // console.log('modulePath=='+modulePath);// all that this means is that the serverEntry has some sort of error in it.
      // but where is it?
      require(modulePath);
    }
  } catch (e) {
    // console.log(e);
    if (e.code === 'MODULE_NOT_FOUND') {
      debug(chalk.gray(`...waiting for '${modulePath}'`));
      process.exit(1);
    } else {
      throw e;
    }
  }
}

if (require.main === module) {
  ensureAllGeneratedFilesExist();
  console.log(`passed ensureAllGeneratedFilesExist()`);
  const handleSSR = require('./middlewares/handleSSR');

  const app = express();
  app.use(handleSSR);

  const server = http.createServer(app).listen(port, (err) => {
    if (err) {
      console.error(err);
    } else {
      debug(chalk.gray('ready!'));
    }
  });

  enableDestroy(server);

  // see: https://github.com/remy/nodemon#controlling-shutdown-of-your-script
  process.once('SIGUSR2', () => {
    server.destroy(() => {
      debug(chalk.gray('restarting...'));
      process.kill(process.pid, 'SIGUSR2');
    });
  });
}
