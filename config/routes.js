/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  // LOGIN/VERIFY/REGISTER
  'POST /login': { action: 'user/login' },
  'POST /verify': { action: 'user/verify' },
  'POST /register': { action: 'user/edit' },
  // USER
  'GET /user/:id': { action: 'user/get'},
  'PATCH /user/:id': { action: 'user/edit'},
  // USER CALORIES
  'GET /user/:uid/calories/week': { action: 'user/calories/get-week'},
  'GET /user/:uid/calories': { action: 'user/calories/get'},
  'PATCH /user/:uid/calories': { action: 'user/calories/edit'},
  'DELETE /user/:uid/calories': { action: 'user/calories/delete'},
  // USER WEIGHT
  'GET /user/:uid/weight': { action: 'user/weight_over_time/get'},
  'PATCH /user/:uid/weight': { action: 'user/weight_over_time/edit'},
  'DELETE /user/:uid/weight': { action: 'user/weight_over_time/delete'},
  // EXERCISE
  'GET /exercise/:uid': { action: 'exercise/get'},
  'PATCH /exercise/:uid': { action: 'exercise/edit'},
  'DELETE /exercise/:uid': { action: 'exercise/delete' },
  // NUTRITION
  'GET /nutrition/:uid': { action: 'nutrition/get'},
  'PATCH /nutrition/:uid': { action: 'nutrition/edit'},
  'DELETE /nutrition/:uid': { action: 'nutrition/delete'},

};
