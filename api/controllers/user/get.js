module.exports = {


  friendlyName: 'View all/single user',


  description: 'test.',

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
    let result = await User.findOne({id: inputs.id});
    if (!!result) {
      delete result.password;
      return result;
    }
    return null;
  }


};
