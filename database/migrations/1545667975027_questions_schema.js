'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('question_text')
      table.boolean('is_active').defaultTo(true)
      table.integer('question_type_id').references('id').inTable('question_types')
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
