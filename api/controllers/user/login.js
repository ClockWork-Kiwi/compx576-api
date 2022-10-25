module.exports = {


  friendlyName: 'Attempt to log in using a given pair of username/password',

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
    // Try to find a user matching the given username
    let user = await User.findOne({username: inputs.username});
    // If none is found, return false
    if (!user) { return false; }
    // If a user is found with a matching username, use the argon2 library to verify that the given password belongs to the found user
    const argon2 = require('argon2');
    let match = await argon2.verify(user.password, inputs.password);
    // If the username/password are verified
    if (match) {
      // Create a json web token to return to the web app (set to expire in 1 hour)
      const jwt = require('jsonwebtoken');
      return {uid: user.id, token: jwt.sign({username: inputs.username}, 'fitnesse-dashboard', { expiresIn: '1h' })};
    } else { // If the username/password cannot be verified, return false
      return false;
    }
  }
};
