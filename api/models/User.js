/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  tableName: 'users',

  attributes: {
    id: {
      type: 'number',
      required: true,
      unique: true,
    },

    username: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 100,
    },

    password: {
      type: 'string',
      required: true,
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },

    sex: {
      type: 'string',
      required: true,
      example: 'male'
    },

    age: {
      type: 'number',
      required: true,
      example: 20
    },

    height: {
      type: 'number',
      required: true,
      example: 180
    },

    weight: {
      type: 'number',
      required: true,
      example: 90
    },

    weight_goal: {
      type: 'number',
      required: true,
      example: 1
    },

    diet_plan: {
      type: 'number',
      required: false,
      example: 1
    },

    calories_allowed: {
      type: 'number',
      required: false,
      example: 2000
    },
  },


};
