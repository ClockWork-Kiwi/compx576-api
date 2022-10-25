/**
 * NutritionItem.js
 *
 * A user nutrition item that has calories, fat, carbs, and protein associated with it
 * The date of creation of nutrition items is stored, so that they can be wiped from the database every day
 */

module.exports = {
  tableName: 'food_items',

  attributes: {

    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
    },

    uid: {
      type: 'number',
      required: true,
    },

    food_name: {
      type: 'string',
      maxLength: 200,
    },

    servings: {
      type: 'number',
    },

    calories: {
      type: 'number',
      required: true,
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
      type: 'string'
    }
  },


};
