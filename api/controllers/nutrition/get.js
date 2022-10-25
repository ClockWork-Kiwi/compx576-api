module.exports = {


  friendlyName: 'Get a user\'s nutrition items',

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


  fn: async function (inputs) {
    // Find the nutrition items associated with the given user
    let result = await NutritionItem.find({uid: inputs.uid});
    // If no items are found, return an empty array
    if (!result || !result.length) { return []; }
    // Create a new date for today
    const today = new Date();
    // Get the date stored against one of the nutrition items (they should all be the same, so we just check the first in the array)
    const storedDate = new Date(result[0].date);
    // Check whether the date stored against the nutrition items matches today
    const dayMatch = today.getDate() === storedDate.getDate();
    const monthMatch = today.getMonth() === storedDate.getMonth();
    const yearMatch = today.getFullYear() === storedDate.getFullYear();
    // If the dates don't match
    if (!dayMatch || !monthMatch || !yearMatch) {
      // Wipe table
      await NutritionItem.destroy({uid: inputs.uid});
      // Return an empty array
      return [];
    } else { // If the dates do match, simply return the user's nutrition items
      return result;
    }
  }


};
