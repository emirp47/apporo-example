'use strict';

var devebot = require('devebot'); //.parseArguments(require.main === module);

var app = devebot.launchApplication({
  appRootPath: __dirname
}, [
  'app-restfront',
  'app-opmaster',
]);

if (require.main === module) app.server.start();

module.exports = app;
