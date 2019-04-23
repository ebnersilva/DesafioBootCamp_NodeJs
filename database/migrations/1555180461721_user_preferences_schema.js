'use strict'

const Schema = use('Schema')

class UserPreferencesSchema extends Schema {
  up () {
    this.create('user_preferences', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
      table
        .integer('pref_id')
        .unsigned()
        .references('id')
        .inTable('preferences')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_preferences')
  }
}

module.exports = UserPreferencesSchema
