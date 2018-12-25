'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    Promise.all([
      this.create('groups', (table) => {
        table.increments()
        table.string('name')
        table.timestamps()
      }),
      this.create('users', (table) => {
        table.increments()
        table.string('username', 80).notNullable().unique()
        table.string('email', 254).notNullable().unique()
        table.string('password', 60).notNullable()
        table.varchar('access_type').defaultTo('student')
        table.timestamp('dob')
        table.timestamp('last_seen')
        table.timestamp('is_active').defaultTo(true)
        table.varchar('class_id').references('id').inTable('groups')
        table.timestamp('deleted_at').nullable().defaultTo(null)
        table.timestamps()
      })
    ])
  }

  down () {
    return Promise.all([
      this.drop('groups'),
      this.drop('users')
    ])
  }
}

module.exports = UserSchema
