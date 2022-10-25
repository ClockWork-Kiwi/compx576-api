module.exports = {


  friendlyName: 'Edit/create a single nutrition item for a given user',

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

    servings: {
      type: 'number',
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

    date: {
      type: 'string',
    }
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    let result;
    // If no item id was supplied, simply create a new nutrition item against the given user
    if (!inputs.id) {
      result = await NutritionItem.create(inputs);
    } else { // If an item id was supplied, update that nutrition item
      result = await NutritionItem.update(inputs.id).set(inputs);
    }
    // Fetch the updated list of nutrition items from the database, and return it
    result = await NutritionItem.find({uid: inputs.uid});
    return result;
  }


};
