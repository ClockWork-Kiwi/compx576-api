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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  // USER
  'GET /user/:id': { action: 'user/get'},
  'PATCH /user/:id': { action: 'user/edit'},
  // USER CALORIES
  'GET /user/:uid/calories': { action: 'user/calories/get'},
  'PATCH /user/:uid/calories': { action: 'user/calories/edit'},
  'DELETE /user/:uid/calories': { action: 'user/calories/delete'},
  // EXERCISE
  'GET /exercise/:uid': { action: 'exercise/get'},
  'PATCH /exercise/:uid': { action: 'exercise/edit'},
  'DELETE /exercise/:uid': { action: 'exercise/delete' },
  // NUTRITION
  'GET /nutrition/:uid': { action: 'nutrition/get'},
  'PATCH /nutrition/:uid': { action: 'nutrition/edit'},
  'DELETE /nutrition/:uid': { action: 'nutrition/delete'},

};
