import type { Knex } from 'knex';
import { resolve } from 'path';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      // filename: './dev.sqlite3'
      filename: resolve(__dirname, '..', 'dev.sqlite3')
    },
    useNullAsDefault: true,
    migrations: {
      // directory: './migrations'
      directory: resolve(__dirname, 'migrations')
    }
  },
  test: {
    client: 'sqlite3',
    connection: {
      // Use an in-memory database for tests so each test run starts fresh
      filename: ':memory:'
    },
    useNullAsDefault: true,
    migrations: {
      // directory: './src/migrations'
      directory: resolve(__dirname, 'migrations')
    }
  }
};

export default config;
