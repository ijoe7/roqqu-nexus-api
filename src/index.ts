import { config } from './config/config';

import app from './app';

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  console.error('Uncaught Exception! Shutting down...');
  console.error(err.name, err.message, err.stack);
  process.exit(1);
});

// Start the server
const server = app.listen(config.port, () => {
  console.log(`App running on port: ${config.port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.error('Unhandled Rejection! Shutting down...');
  console.error(err.name, err.message, err.stack);
  server.close(() => process.exit(1));
});
