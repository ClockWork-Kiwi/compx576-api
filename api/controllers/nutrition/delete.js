module.exports = {


  friendlyName: 'Delete a user\'s nutrition item(s)',

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
    let result;
    // If no nutrition item id was supplied, destroy all nutrition items associated with the user
    if (!inputs.id) {
      result = await NutritionItem.destroy({uid: inputs.uid});
    } else { // If a nutrition item id was supplied, simply destroy that one
      result = await NutritionItem.destroyOne({id: inputs.id});
    }
    // Fetch the updated list of user nutrition items, and return it
    result = await NutritionItem.find({uid: inputs.uid});
    return result;
  }


};
