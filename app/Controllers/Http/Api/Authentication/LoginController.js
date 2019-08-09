'use strict'

class LoginController {

	async login ({ auth, request }) {
	    const { email, password } = request.all()
	    const {token} = await auth.attempt(email, password)
	    return {token} 
  	}

  	async getAuthUser({ auth, request}){
	    const user = await auth.getUser()
	    return {user} 
  	}
}

module.exports = LoginController
