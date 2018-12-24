'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelQuestionsOptionsSchema extends Schema {
  up () {
    this.create('rel_questions_options', (table) => {
      table.increments()
      table.integer('question_id').references('id').inTable('questions')
      table.integer('option_id').references('id').inTable('options')
      table.boolean('selected').defaultTo(false)
      table.boolean('is_active').defaultTo(true)
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('rel_questions_options')
  }
}

module.exports = RelQuestionsOptionsSchema
