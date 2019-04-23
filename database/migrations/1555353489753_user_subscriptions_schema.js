'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSubscriptionsSchema extends Schema {
  up () {
    this.create('user_subscriptions', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
      table
        .integer('meetup_id')
        .unsigned()
        .references('id')
        .inTable('meet_ups')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_subscriptions')
  }
}

module.exports = UserSubscriptionsSchema
