'use strict'

const Model = use('Model')

class MeetUp extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  category () {
    return this.belongsTo('App/Models/Preference')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = MeetUp
