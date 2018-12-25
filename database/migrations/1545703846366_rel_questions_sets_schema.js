'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelQuestionsSetsSchema extends Schema {
  up () {
    this.create('rel_questions_sets', (table) => {
      table.increments()
      table.integer('question_id').references('id').inTable('questions')
      table.integer('option_id').references('id').inTable('options')
      table.boolean('is_active')
      table.timestamps()
    })
  }

  down () {
    this.drop('rel_questions_sets')
  }
}

module.exports = RelQuestionsSetsSchema
