module.exports = {


  friendlyName: 'Get a user\'s nutrition items',


  description: 'test.',

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
    let result = await ExerciseItem.find({uid: inputs.uid});
    if (!result || !result.length) { return []; }
    const today = new Date();
    const storedDate = new Date(result[0].date);
    const dayMatch = today.getDay() === storedDate.getDay();
    const monthMatch = today.getMonth() === storedDate.getMonth();
    const yearMatch = today.getFullYear() === storedDate.getFullYear();
    if (!dayMatch || !monthMatch || !yearMatch) {
      // Wipe table
      await NutritionItem.destroy({uid: inputs.uid});
      return [];
    } else {
      return result;
    }
  }


};
