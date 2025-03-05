import dotenv from 'dotenv';
import { AppError } from './appError';

// Load environment variables
dotenv.config();

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new AppError(`Environment variable ${key} is not defined`, 404);
  }
  return value;
}

export const config = {
  port: Number(process.env.PORT) || 3001,
  environment: process.env.NODE_ENV || 'development',
  dbUrl: getEnvVariable('DB_URL') as string
};
