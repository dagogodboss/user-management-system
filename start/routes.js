'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.post('login', '/Api/Authentication/LoginController.login').middleware('guest')
Route.post('register', '/Api/Authentication/RegisterController.register').middleware('guest')
Route.post('api/user', '/Api/Authentication/LoginController.getAuthUser').middleware('auth')

// Route.get('users/:id', 'UserController.show').middleware('auth')
