'use strict';

var path = require('path');
var contextPath = '/apporo-example';
var sessionObjectName = 'apporo-example';

module.exports = {
  application: {
    contextPath: contextPath,
    sessionObjectName: sessionObjectName
  },
  plugins: {
    appWebserver: {
      host: "0.0.0.0",
      port: 7979
    },
    appRestfront: {
      priority: 100,
      contextPath: contextPath,
      mappingStore: require('path').join(__dirname, '../../lib/mappings/restfront-mongodb')
    }
  }
};
