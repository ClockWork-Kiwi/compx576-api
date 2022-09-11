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
  'GET /user/:id?': { action: 'user/get'},
  'PATCH /user/:id': { action: 'user/edit'},
  // EXERCISE
  'GET /exercise/:id': { action: 'exercise/get'},
  'PATCH /exercise/:id': { action: 'exercise/edit'},
  // NUTRITION
  'GET /nutrition/:uid': { action: 'nutrition/get'},
  'PATCH /nutrition/:uid': { action: 'nutrition/edit'},


};
