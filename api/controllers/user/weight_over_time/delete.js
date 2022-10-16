module.exports = {


  friendlyName: 'Get a user\'s nutrition items',


  description: 'test.',

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
    if (!inputs.id) {
      result = await UserWeight.destroy({uid: inputs.uid});
    } else {
      result = await UserWeight.destroyOne({id: inputs.id});
    }
    return result;
  }


};
