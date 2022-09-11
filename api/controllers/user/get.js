module.exports = {


  friendlyName: 'View all/single user',


  description: 'test.',

  inputs: {
    id: {
      type: 'number',
      required: false,
    }
  },


  exits: {

    success: {
    }

  },


  fn: async function (inputs) {
    if (!inputs.id) {
      result = await User.find();
    } else {
      result = await User.findOne({id: inputs.id});
    }
    return result;

  }


};
