module.exports = {


  friendlyName: 'Get a user\'s exercise items',

  inputs: {
    id: {
      type: 'number',
    },

    uid: {
      type: 'number',
      required: true,
    },
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs)  {
    // Retrieve all exercise items associated with the user id provided
    let result = await ExerciseItem.find({uid: inputs.uid});
    // If there are no results, return an empty array
    if (!result || !result.length) { return []; }
    // Create a new date for today
    const today = new Date();
    // Get the date stored against one of the exercise items (they should all be the same, so we just check the first in the array)
    const storedDate = new Date(result[0].date);
    // Check whether the date stored against the exercise items matches today
    const dayMatch = today.getDay() === storedDate.getDay();
    const monthMatch = today.getMonth() === storedDate.getMonth();
    const yearMatch = today.getFullYear() === storedDate.getFullYear();
    // If the dates don't match
    if (!dayMatch || !monthMatch || !yearMatch) {
      // Wipe table
      await ExerciseItem.destroy({uid: inputs.uid});
      // Return an empty array
      return [];
    } else { // If the dates do match, simply return the user's exercise items
      return result;
    }
  }


};
