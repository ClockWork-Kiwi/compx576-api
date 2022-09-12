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


  fn: async function (inputs) {
    let result;
    if (!inputs.id) {
      result = await NutritionItem.destroy({uid: inputs.uid});
    } else {
      result = await NutritionItem.destroyOne({id: inputs.id});
    }
    return result;

  }


};
