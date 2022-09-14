module.exports = {


  friendlyName: 'Get a user\'s nutrition items',


  description: 'test.',

  inputs: {
    id: {
      type: 'number',
    },

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
    let result;
    if (!inputs.id) {
      result = await ExerciseItem.destroy({uid: inputs.uid});
    } else {
      result = await ExerciseItem.destroyOne({id: inputs.id});
    }
    return result;

  }


};
