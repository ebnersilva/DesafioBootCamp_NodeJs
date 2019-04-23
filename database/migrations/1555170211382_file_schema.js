'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', table => {
      table.increments()
      table.string('file').notNullable() // Arquivo
      table.string('name').notNullable() // Nome original do arquivo
      table.string('type', 20) // Se é imagem se é PDF etc...
      table.string('subtype', 20) //  Sub Tipo do arquivo (jpg, png)
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
