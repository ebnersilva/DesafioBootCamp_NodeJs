'use strict'

const Model = use('Model')

class UserPreference extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  preference () {
    return this.belongsTo('App/Models/Preference')
  }
}

module.exports = UserPreference
