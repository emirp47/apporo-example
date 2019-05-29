'use strict';

var Devebot = require('devebot');
var Promise = Devebot.require('bluebird');
var chores = Devebot.require('chores');
var lodash = Devebot.require('lodash');

var Service = function (params) {
  params = params || {};
  var self = this;

  var LX = params.loggingFactory.getLogger();
  var LT = params.loggingFactory.getTracer();
  var pluginCfg = lodash.get(params, ['sandboxConfig'], {});

  this.testValidator = function (body) {
    return Promise.resolve(body);
  }

};

Service.referenceList = [
]

module.exports = Service;
