module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

  inputs: {

    uid: {
      type: 'number',
      required: true,
    },

    date: {
      type: 'string',
    },

    calories_burned: {
      type: 'number',
    },

    calories_consumed: {
      type: 'number',
    },
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    let result = await UserCalories.findOne({uid: inputs.uid});
    if (!result) {
      result = await UserCalories.create(inputs).fetch();
      result = result[0];
    } else {
      result = await UserCalories.update({uid: inputs.uid}).set(inputs).fetch();
      result = result[0];
    }
    return result;
  }


};
