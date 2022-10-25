module.exports = {


  friendlyName: 'Delete a user\'s exercise item(s)',

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
    // If no id was specified, destroy all exercise items associated with the user id supplied
    if (!inputs.id) {
      result = await ExerciseItem.destroy({uid: inputs.uid});
    } else { // If an id was specified, destroy the item matching that id
      result = await ExerciseItem.destroyOne({id: inputs.id});
    }
    // Fetch the updated list of exercise items from the database, and return it
    result = await ExerciseItem.find({uid: inputs.uid});
    return result;

  }


};
