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
    let result = await NutritionItem.find({uid: inputs.uid});
    return result;

  }


};
