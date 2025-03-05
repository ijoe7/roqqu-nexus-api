// statusCodes.ts
export const STATUS_CODES = {
  200: { message: 'OK', status: '00' },
  201: { message: 'Created', status: '00' },
  400: { message: 'Bad Request', status: '09' },
  401: { message: 'Unauthorized', status: '09' },
  403: { message: 'Forbidden', status: '09' },
  404: { message: 'Not Found', status: '09' },
  408: { message: 'Request Timeout', status: '09' },
  500: { message: 'Internal Server Error', status: '05' },
  501: { message: 'Not Implemented', status: '05' },
  502: { message: 'Bad Gateway', status: '05' },
  503: { message: 'Service Unavailable', status: '05' },
  504: { message: 'Gateway Timeout', status: '05' },
  default: { message: 'Unknown error occurred', status: '07' },
} as const;

// Type for status codes
export type StatusCode = keyof typeof STATUS_CODES;

// export function getStatusDetails(statusCode: StatusCode | number) {
//   return STATUS_CODES[statusCode] || STATUS_CODES.default;
// }

export function getStatusDetails(statusCode: StatusCode): { message: string, status: string } {
  return STATUS_CODES[statusCode] ?? STATUS_CODES.default; // `??` ensures fallback only if undefined
}