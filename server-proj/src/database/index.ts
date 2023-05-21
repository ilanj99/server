import knex from 'knex';
import { knexfile } from 'src/knexfile';

const env = process.env.NODE_ENV || 'development';

export const db = knex(knexfile[env])
// module.exports = db;    
