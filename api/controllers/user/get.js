module.exports = {


  friendlyName: 'View a single user',

  inputs: {
    id: {
      type: 'number',
      required: true,
    }
  },


  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    // Try to find a user matching the given id
    let result = await User.findOne({id: inputs.id});
    // If found, delete the password from the result (for security reasons) and return the rest
    if (!!result) {
      delete result.password;
      return result;
    }
    // If nothing is found matching the given id, return null
    return null;
  }


};
