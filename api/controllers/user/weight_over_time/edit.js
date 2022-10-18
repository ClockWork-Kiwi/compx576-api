module.exports = {


  friendlyName: 'Edit a single user',


  description: 'test.',

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
    let today = new Date();
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let result = await UserWeight.findOne({uid: inputs.uid, date: today});
    if (!result) {
      result = await UserWeight.create(inputs).fetch();
    } else {
      result = await UserWeight.update({uid: inputs.uid, date: today}).set(inputs).fetch();
    }
    return !!result.length ? result[0] : result;
  }


};
