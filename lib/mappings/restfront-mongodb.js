'use strict';

var mappings = [
  {
    path: '/test/validator',
    method: 'POST',
    validatorSchema: {
      statusCode: 400,
      email: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
        length: {
          min: 5,
          max: 7
        }
      }
    },
    serviceName: 'application/example',
    methodName: 'testValidator',
    transformRequest: function (req) {
      return {
        email: req.body.email,
        firstName: req.body.firstName,
        deviceToken: req.headers["x-device-token"]
      }
    },
    transformResponse: function (response) {
      return {
        body: response
      };
    },
  },
]

module.exports = mappings;
