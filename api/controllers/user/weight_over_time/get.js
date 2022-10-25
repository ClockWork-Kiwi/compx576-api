module.exports = {


  friendlyName: 'Get a user\'s weight over time',

  inputs: {
    uid: {
      type: 'number',
      required: true,
    },
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    // Find any user weight objects associated with the given user, and return them sorted from least recent > most recent
    let result = await UserWeight.find({uid: inputs.uid}).sort('date ASC');
    return result;
  }


};
