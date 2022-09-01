/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  tableName: 'users',

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    id: {
      type: 'integer',
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
      type: 'integer',
      required: true,
      example: 20
    },

    height: {
      type: 'integer',
      required: true,
      example: 180
    },

    weight: {
      type: 'integer',
      required: true,
      example: 90
    },

    weight_goal: {
      type: 'integer',
      required: true,
      example: 1
    },

    diet_plan: {
      type: 'integer',
      required: false,
      example: 1
    },

    calories_allowed: {
      type: 'integer',
      required: false,
      example: 2000
    },

    calories_consumed: {
      type: 'integer',
      required: false,
      example: 500
    },

    calories_burned: {
      type: 'integer',
      required: false,
      example: 200
    },

    // passwordResetToken: {
    //   type: 'string',
    //   description: 'A unique token used to verify the user\'s identity when recovering a password.  Expires after 1 use, or after a set amount of time has elapsed.'
    // },
    //
    // passwordResetTokenExpiresAt: {
    //   type: 'number',
    //   description: 'A JS timestamp (epoch ms) representing the moment when this user\'s `passwordResetToken` will expire (or 0 if the user currently has no such token).',
    //   example: 1502844074211
    // },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

  },


};
