// AppError.ts
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message); // Call the parent class (Error) constructor
    this.statusCode = statusCode;
    this.isOperational = true; // Marks the error as operational (as opposed to bugs or unexpected errors)

    Error.captureStackTrace(this, this.constructor);
  }
}

// Error types for easy categorization
export class BadRequestError extends AppError {
  constructor(message: string = 'Bad Request') {
    super(message, 400); // 400: Bad Request
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401); // 401: Unauthorized
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super(message, 403); // 403: Forbidden
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Not Found') {
    super(message, 404); // 404: Not Found
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'Internal Server Error') {
    super(message, 500); // 500: Internal Server Error
  }
}
