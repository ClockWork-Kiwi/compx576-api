module.exports = {


  friendlyName: 'Edit/create an object containing a user\'s weight for a given day',

  inputs: {

    uid: {
      type: 'number',
      required: true,
    },

    id: {
      type: 'number'
    },

    date: {
      type: 'string',
    },

    weight: {
      type: 'string',
    },
  },

  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    // Create a new Date object for today
    let today = new Date();
    // Format the 'today' object to match the format we store dates in the database
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // Try to find a user weight object for the given user that has been created today
    let result = await UserWeight.findOne({uid: inputs.uid, date: today});
    // If no such object is found, create a new user weight object using the given data
    if (!result) {
      result = await UserWeight.create(inputs).fetch();
    } else { // If such an object is found, update that object using the given data
      result = await UserWeight.update({uid: inputs.uid, date: today}).set(inputs).fetch();
    }
    // If the 'result' variable is an array, return the first element, otherwise just return the result
    return !!result.length ? result[0] : result;
  }


};
