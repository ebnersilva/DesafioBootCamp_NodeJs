'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserSubscription extends Model {
  static boot () {
    super.boot()

    this.addHook('afterSave', 'UserSubscriptionHook.sendNewSubscriptionMail')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = UserSubscription
