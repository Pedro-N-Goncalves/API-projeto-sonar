'use strict'

const Schema = use ('Schema')

class PostSchema extends Schema {
  up () {
    this.create ('posts', (table) => {
      table.increments ()
      table
        .integer ('user_id')
        .unsigned ()
        .references ('id')
        .inTable ('users')
        .onUpdate ('CASCADE')
        .onDelete ('CASCADE')
      table.string ('desc', 3072).notNullable ()
      table.float ('average_rating', 2, 1).unsigned ().defaultTo (0)
      table.timestamps ()
    })
  }

  down () {
    this.drop ('posts')
  }
}

module.exports = PostSchema
