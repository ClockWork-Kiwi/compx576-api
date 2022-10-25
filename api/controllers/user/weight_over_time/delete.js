module.exports = {


  friendlyName: 'Delete a user\'s weight over time item(s)',

  inputs: {
    uid: {
      type: 'number',
      required: true,
    },
    id: {
      type: 'number'
    }
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    let result;
    // If an id for a user weight object was not supplied, destroy all user weight objects associated with the user
    if (!inputs.id) {
      result = await UserWeight.destroy({uid: inputs.uid});
    } else { // If an id for a user weight object was supplied, simply destroy that one
      result = await UserWeight.destroyOne({id: inputs.id});
    }
    // Return the deleted item
    return result;
  }


};
