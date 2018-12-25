'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScoresSchema extends Schema {
  up () {
    this.create('scores', (table) => {
      table.increments()
      table.integer('set_id').references('id').inTable('sets')
      table.integer('taker').references('id').inTable('users')
      table.integer('score')
      table.timestamps()
    })
  }

  down () {
    this.drop('scores')
  }
}

module.exports = ScoresSchema
