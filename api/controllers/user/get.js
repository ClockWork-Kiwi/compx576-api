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
    return await User.findOne({id: inputs.id});
  }


};
