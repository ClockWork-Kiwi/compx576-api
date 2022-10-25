module.exports = {


  friendlyName: 'Get a user\'s calorie totals over the past week',


  description: 'test.',

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
    // Get the calorie totals associated with the given user
    let result = await UserCalories.find({uid: inputs.uid}).sort('date DESC');
    // If none are found, return an empty array
    if (!result) { return []; }
    // Create a new date for 'today'
    const today = new Date().getDate();
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    // Create an array to hold output
    const output = [];
    // Loop 7 times, starting at 6 and ending on 0
    for (let i = 6; i >= 0; i--) {
      // Begin by assuming no data exists
      let found = false;
      // For each user calorie total object
      for (let row of result) {
        // Get the date stored against the calorie total object, and convert it into a Date object
        const storedDate = new Date(row.date);
        // If the month and year matches today, and the day matches today - i, push the current object onto the output
        // This essentially pushes all objects from the previous week (including today) onto the output
        if ((storedDate.getDate() === today - i) && storedDate.getMonth() === thisMonth && storedDate.getFullYear() === thisYear) {
          output.push(row);
          // Flag that for the current ith day prior to today, data was found
          found = true;
        }
      }
      // If no calorie data exists for the ith day prior to today, simply push an empty object onto the output for this day
      // This represents a day that the user did not log into & use the app
      if (!found) {
        output.push({});
      }
    }
    return output;
  }


};
