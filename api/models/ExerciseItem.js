/**
 * ExerciseItem.js
 *
 * A user exercise item that has calories, and a duration associated with it
 * The date of creation of exercise items are stored, so that they can be wiped from the database every day
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

    date: {
      type: 'string',
    }
  },


};
