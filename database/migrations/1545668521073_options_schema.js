'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OptionsSchema extends Schema {
  up () {
    return Promise.all([
      this.create('options', (table) => {
        table.increments()
        table.string('option_text')
        table.timestamps()
      }),
      this.create('option_attachments', (table) => {
        table.increments()
        table.integer('option_id').references('id').inTable('options')
        table.timestamps()
      })
    ])
  }

  down () {
    return Promise.all([
      this.drop('options'),
      this.drop('option_attachments')
    ])
  }
}

module.exports = OptionsSchema
