/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  tableName: 'user_calories',

  attributes: {
    uid: {
      type: 'number',
      required: true,
    },

    id: {
      type: 'number',
      autoIncrement: true,
    },

    date: {
      type: 'string',
      required: true,
      maxLength: 100,
    },

    calories_allowed: {
      type: 'number',
      required: true,
    },

    calories_burned:  {
      type: 'number',
      required: true,
    },

    calories_consumed:  {
      type: 'number',
      required: true,
    }
  },


};
