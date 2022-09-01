module.exports = {


  friendlyName: 'View all/single user',


  description: 'test.',


  exits: {

    success: {
    }

  },


  fn: async function () {

   let x = await User.find();

    return x;

  }


};
