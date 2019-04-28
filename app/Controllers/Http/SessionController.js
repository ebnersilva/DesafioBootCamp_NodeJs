'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    let user = await User.query()
      .where('email', email)
      .fetch()

    return { ...token, user }
  }

  show ({ auth, params }) {
    return auth.getUser()
  }
}

module.exports = SessionController
