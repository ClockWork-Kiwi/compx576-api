module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

  inputs: {
    id: {
      type: 'number'
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
    calories_consumed: {
      type: 'number',
      required: false,
    },
    calories_burned: {
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
    if (!inputs.id) {
      result = await User.create(inputs);
    } else {
      result = await User.update(inputs.id).set(inputs);
    }
    return result;
  }


};
