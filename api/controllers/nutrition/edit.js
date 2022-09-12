module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

  inputs: {
    id: {
      type: 'number',
    },

    uid: {
      type: 'number',
    },

    food_name: {
      type: 'string',
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
    let result;
    if (!inputs.id) {
      result = await NutritionItem.create(inputs);
    } else {
      result = await NutritionItem.update(inputs.id).set(inputs);
    }
    return result;
  }


};
