/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  tableName: 'user_weight_over_time',

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

    weight: {
      type: 'string',
      required: true,
    },
  },


};
