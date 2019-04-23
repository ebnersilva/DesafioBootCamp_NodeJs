'use strict'

const Model = use('Model')

class MeetUp extends Model {
  user () {
    return this.hasOne('App/Models/User')
  }

  category () {
    return this.hasOne('App/Models/Preference')
  }

  file () {
    return this.hasOne('App/Models/File')
  }
}

module.exports = MeetUp
