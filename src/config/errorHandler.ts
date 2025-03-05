// import { Request, Response, NextFunction } from 'express';
import { Request, Response, NextFunction } from 'express';
import { AppError } from './appError';
import { config } from './config';

// // Error handler middleware
export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction // Required for Express to recognize this as an error handler
): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const environment = config.environment;

  // Log unexpected errors in production for debugging purposes
  if (environment === 'production') {
    if (!err.isOperational) {
      // Log unexpected errors (programming bugs)
      console.error('Unexpected Error:', err);
    }
  } else {
    // For all non-production environments, log full error details (stack trace)
    console.error(`Error (${environment}):`, err.stack);
  }

  // // Log the error in development
  // if (process.env.NODE_ENV === 'development') {
  //   console.error('Error:', err.stack);
  // }

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(environment !== 'production' && { stack: err.stack }) // Include stack trace in development
  });
}
