/**
 * User.js
 *
 * A user who can log in to this application.
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
