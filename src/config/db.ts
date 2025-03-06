import knex from 'knex';
import config from '../knexfile';
import { config as dbConfig } from './config';

// const environment = process.env.NODE_ENV || 'development' as string;
const environment = dbConfig.environment as string;
console.log(environment);
const connection = knex(config[environment]);

export default connection;
