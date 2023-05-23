import knex from 'knex';
import { knexfile } from 'src/knexfile';

const env = process.env.NODE_ENV || 'development';

export const db = knex(knexfile[env]);
db.on ('query', (t)=>console.log(t));
// module.exports = db;    
