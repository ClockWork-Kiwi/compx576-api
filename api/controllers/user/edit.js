module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

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
    const uid = inputs.id;
    delete inputs.id;
    if (!uid) {
      const argon2 = require('argon2');
      inputs.password = await argon2.hash(inputs.password);
      result = await User.create(inputs).fetch();
    } else {
      result = await User.updateOne({id: uid}).set(inputs);
    }
    delete result.username;
    delete result.password;
    return result;
  }


};
