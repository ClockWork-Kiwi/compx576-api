module.exports = {


  friendlyName: 'Edit/Create a single exercise item against a user',

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
    // If no id was specified in the inputs, create a new exercise item
    if (!inputs.id) {
      result = await ExerciseItem.create(inputs);
    } else { // If an id was specified in the inputs, update that item
      result = await ExerciseItem.update(inputs.id).set(inputs);
    }
    // Fetch the updated exercise list from the database, and return it
    result = await ExerciseItem.find({uid: inputs.uid});
    return result;
  }


};
