module.exports = {


  friendlyName: 'Get a user\'s calorie information over time',

  inputs: {
    uid: {
      type: 'number',
      required: true,
    },
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    // Find the calorie totals per day associated with the given user
    let result = await UserCalories.find({uid: inputs.uid});
    // Sort the result so that least recent dates are first, and most recent are last.
    // Return the sorted array
    return result.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) { return 1; }
      if (aDate < bDate) { return -1; }
      return 0;
    });
  }


};
