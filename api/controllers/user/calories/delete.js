module.exports = {


  friendlyName: 'Delete a user\'s calorie totals',

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
    // Destroy all user calorie entries associated with the given user
    let result = await UserCalories.destroy({uid: inputs.uid});
    return result;

  }


};
