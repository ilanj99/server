import knex from 'knex';
import { knexfile } from 'src/knexfile';

const env = process.env.NODE_ENV || 'development';

module.exports = knex(knexfile[env]);
