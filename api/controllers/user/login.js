const jwt = require('jsonwebtoken');
module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

  inputs: {
    username: {
      type: 'string'
    },
    password: {
      type: 'string',
    }
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    let user = await User.findOne({username: inputs.username});
    if (!user) { return false; }
    const argon2 = require('argon2');
    let match = await argon2.verify(user.password, inputs.password);
    if (match) {
      const jwt = require('jsonwebtoken');
      return {uid: user.id, token: jwt.sign({username: inputs.username}, 'fitnesse-dashboard', { expiresIn: '1h' })};
    } else {
      return false;
    }
  }
};
