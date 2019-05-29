'use strict';

var path = require('path');

module.exports = {
  devebot: {
    verbose: true,
    mode: "silent"
  },
  logger: {
    transports: {
      console: {
        type: 'console',
        level: 'debug',
        json: false,
        timestamp: true,
        colorize: true
      },
      dailyRotateFile: {
        type: 'dailyRotateFile',
        level: 'debug',
        json: false,
        datePattern: '.yyyy-MM-dd',
        filename: path.join(__dirname, '../../log/dailyfile.log'),
        zippedArchive: true,
        maxDays: 30
      }
    }
  },
  newFeatures: {
    application: {
      logoliteEnabled: true,
      sandboxConfig: true
    }
  }
};
