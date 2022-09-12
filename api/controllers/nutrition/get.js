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

    food_name: {
      type: 'string',
      maxLength: 200,
    },

    calories: {
      type: 'number',
    },

    protein: {
      type: 'number',
    },

    fat: {
      type: 'number',
    },

    carbs: {
      type: 'number',
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