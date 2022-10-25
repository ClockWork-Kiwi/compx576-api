module.exports = {


  friendlyName: 'Edit a single user',

  inputs: {
    id: {
      type: 'number'
    },
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    sex: {
      type: 'string',
      required: false,
    },
    age: {
      type: 'number',
      required: false,
    },
    height: {
      type: 'number',
      required: false,
    },
    weight: {
      type: 'number',
      required: false,
    },
    weight_goal: {
      type: 'number',
      required: false,
    },
    diet_plan: {
      type: 'number',
      required: false,
    },
    calories_allowed: {
      type: 'number',
      required: false,
    },
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    let result;
    // Create a local variable to store the user's id, then delete it from the inputs object
    const uid = inputs.id;
    delete inputs.id;
    // If no uid was supplied at all
    if (!uid) {
      // Create an argon2 hash of the given password, then create a new user using the given information
      const argon2 = require('argon2');
      inputs.password = await argon2.hash(inputs.password);
      result = await User.create(inputs).fetch();
    } else { // If a uid was supplied
      // Update the user corresponding with the given uid, using the given inputs
      result = await User.updateOne({id: uid}).set(inputs);
    }
    // For security reasons, remove the user's username and password from the result, and return
    delete result.username;
    delete result.password;
    return result;
  }


};
