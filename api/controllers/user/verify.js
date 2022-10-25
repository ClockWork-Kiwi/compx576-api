module.exports = {


  friendlyName: 'Verify if a user\'s JWT token is still valid',


  description: 'test.',

  inputs: {
    token: {
      type: 'string',
    }
  },

  exits: {

    success: {
    }

  },

  fn: async function (inputs) {
    const jwt = require('jsonwebtoken');
    // If no token is sent to this endpoint, the user cannot be verified. Return false
    if (!inputs.token) { return false; }
    // Return whether the given token is still valid
    return !!jwt.verify(inputs.token, 'fitnesse-dashboard').username;
  }
};
