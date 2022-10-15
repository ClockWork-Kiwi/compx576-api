module.exports = {


  friendlyName: 'Get a user\'s nutrition items',


  description: 'test.',

  inputs: {
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
    let result = await UserCalories.find({uid: inputs.uid}).sort('date DESC');
    if (!result) { return []; }
    const today = new Date().getDate();
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    const output = [];
    for (let i = 0; i < 7; i++) {
      let found = false;
      for (let row of result) {
        const storedDate = new Date(row.date);
        if ((storedDate.getDate() === today - i) && storedDate.getMonth() === thisMonth && storedDate.getFullYear() === thisYear) {
          output.push(row);
          found = true;
        }
      }
      if (!found) { output.push({}); }
    }
    return output;
  }


};
