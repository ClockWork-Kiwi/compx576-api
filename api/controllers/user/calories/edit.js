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
    // Create a new Date object for today
    let today = new Date();
    // Format today's date to match the format of date's stored in the database
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // Try to find today's calorie totals for the given user
    let result = await UserCalories.findOne({uid: inputs.uid, date: today});
    // If no data is found, we create a new calorie total's object for today
    if (!result) {
      if (!inputs.calories_consumed) { inputs.calories_consumed = 0; }
      if (!inputs.calories_burned) { inputs.calories_burned = 0; }
      result = await UserCalories.create(inputs).fetch();
    } else { // If data for today is found, update it
      result = await UserCalories.update({uid: inputs.uid, date: today}).set(inputs).fetch();
    }
    // If the 'result' variable is an array, return the first element, otherwise just return the result
    return !!result.length ? result[0] : result;
  }


};
