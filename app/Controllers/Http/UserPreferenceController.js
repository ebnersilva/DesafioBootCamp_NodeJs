'use strict'

const UserPrefs = use('App/Models/UserPreference')

class UserPreferenceController {
  async store ({ request, response }) {
    const data = request.input('preferences')

    const userPrefs = await UserPrefs.createMany(data)

    return userPrefs
  }
}

module.exports = UserPreferenceController
