/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  tableName: 'exercise_items',

  attributes: {

    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
    },

    uid: {
      type: 'number',
      required: true,
      unique: true,
    },

    exercise_name: {
      type: 'string',
      maxLength: 200,
    },

    calories: {
      type: 'number',
      required: true,
    },

    duration: {
      type: 'number',
    },
  },


};
