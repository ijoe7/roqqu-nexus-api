// src/db.ts
import knex from 'knex';
import config from './knexfile';
import { config as dbConfig } from './config';

// const environment = process.env.NODE_ENV || 'development';
const environment = dbConfig.environment;
const connection = knex(config[environment]);

export default connection;
