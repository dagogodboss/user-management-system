'use strict'
const User = use('App/Models/User')
class RegisterController {
	async register({ request }){
		return await User.create(request.all())
	}
}

module.exports = RegisterController
