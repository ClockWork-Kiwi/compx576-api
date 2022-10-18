const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
module.exports = {


  friendlyName: 'Edit a single user',


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
    return !!jwt.verify(inputs.token, 'fitnesse-dashboard').username;
  }
};
