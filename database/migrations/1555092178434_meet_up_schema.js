'use strict'

const Schema = use('Schema')

class MeetUpSchema extends Schema {
  up () {
    this.create('meet_ups', table => {
      table.increments()

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')

      table
        .integer('id_category')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('preferences')
        .onUpdate('CASCADE')

      table
        .integer('file_id')
        .unsigned()

        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')

      table.timestamp('date_event')
      table.string('location').notNullable()
      table.string('title').notNullable()
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('meet_ups')
  }
}

module.exports = MeetUpSchema
