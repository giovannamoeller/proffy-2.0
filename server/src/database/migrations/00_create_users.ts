import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar_url').notNullable();
    table.string('whatsapp').notNullable();
    table.string('biography').notNullable();
    table.string('subject').notNullable();
    table.decimal('price').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}