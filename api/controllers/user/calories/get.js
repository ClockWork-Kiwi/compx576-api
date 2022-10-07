module.exports = {


  friendlyName: 'Get a user\'s nutrition items',


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
    let result = await UserCalories.findOne({uid: inputs.uid});
    if (!result) { return {}; }
    const today = new Date();
    const storedDate = new Date(result.date);
    const dayMatch = today.getDay() === storedDate.getDay();
    const monthMatch = today.getMonth() === storedDate.getMonth();
    const yearMatch = today.getFullYear() === storedDate.getFullYear();
    if (!dayMatch || !monthMatch || !yearMatch) {
      // Wipe table
      await UserCalories.destroy({uid: inputs.uid});
      return {};
    } else {
      return result;
    }
  }


};
