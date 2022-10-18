module.exports = {

  inputs: {

    uid: {
      type: 'number',
      required: true,
    },

    date: {
      type: 'string',
    },

    calories_allowed: {
      type: 'number',
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
    let today = new Date();
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let result = await UserCalories.findOne({uid: inputs.uid, date: today});
    if (!result) {
      if (!inputs.calories_consumed) { inputs.calories_consumed = 0; }
      if (!inputs.calories_burned) { inputs.calories_burned = 0; }
      result = await UserCalories.create(inputs).fetch();
    } else {
      result = await UserCalories.update({uid: inputs.uid, date: today}).set(inputs).fetch();
    }
    return !!result.length ? result[0] : result;
  }


};
