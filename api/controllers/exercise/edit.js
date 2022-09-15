module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

  inputs: {

    id: {
      type: 'number',
    },

    uid: {
      type: 'number',
      required: true,
    },

    exercise_name: {
      type: 'string',
    },

    calories: {
      type: 'number',
    },

    duration: {
      type: 'number',
    },

    date: {
      type: 'string'
    }
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    let result;
    if (!inputs.id) {
      result = await ExerciseItem.create(inputs);
    } else {
      result = await ExerciseItem.update(inputs.id).set(inputs);
    }
    result = await ExerciseItem.find({uid: inputs.uid});
    return result;
  }


};
