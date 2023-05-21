import dotenv from 'dotenv';
dotenv.config();

export const knexfile = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    debug:true
    },
    pool: {
      min: 2,
      max: 10
    },
  }
};
