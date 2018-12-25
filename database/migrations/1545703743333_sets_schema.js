'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetsSchema extends Schema {
  up () {
    this.create('sets', (table) => {
      table.increments()
      table.string('set_name')
      table.string('status')
      table.boolean('is_active')
      table.integer('allocated_time')
      table.integer('creator_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('sets')
  }
}

module.exports = SetsSchema
