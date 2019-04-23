'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const users = await User.all()

    return users
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ params, request, response }) {
    // Carregamos o usuário
    const user = await User.findOrFail(params.id)

    // Capturamos os campos
    const data = request.only(['username', 'password'])

    // Fazemos o merge das informações
    user.merge(data)

    // Gravamos as novas informações
    await user.save()

    // Carregamos a variável de preferências
    var preferences = request.input('preferences')

    // Se houver preferencias
    if (preferences) {
      // Carregamos a model de preferencias
      const UserPrefs = use('App/Models/UserPreference')

      // Excluímos todas as preferências desse usuário
      await UserPrefs.query()
        .where('user_id', params.id)
        .delete()

      // Criamos as novas preferencias no banco de dados
      await UserPrefs.createMany(preferences)
    }

    // Retornamos as informações
    return user
  }
}

module.exports = UserController
