// responseHandler.ts
import { Response } from 'express';
import { getStatusDetails, StatusCode } from './statusCodes';

/**
 * Handles success responses.
 * @param res - Express Response object.
 * @param statusCode - HTTP status code.
 * @param message - Optional custom message.
 * @param data - Optional response data.
 */
export function responseHandler(
  res: Response,
  statusCode: StatusCode,
  message?: string,
  data?: unknown
) {
  const { message: defaultMessage, status } = getStatusDetails(statusCode);

  res.status(statusCode as number).json({
    success: true,
    status,
    message: message || defaultMessage,
    data: data || null
  });
}
