'use strict'

const Preference = use('App/Models/Preference')

/**
 * Resourceful controller for interacting with preferences
 */
class PreferenceController {
  async store ({ request }) {
    const data = request.input('preferences')

    const preferences = await Preference.createMany(data)

    return preferences
  }
}

module.exports = PreferenceController
