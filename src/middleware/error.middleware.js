import { AppError } from '../utils/AppError.js';

export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  const statusCode = err.statusCode || err.status || 500;
  const isTrustedError = err instanceof AppError;

  if (statusCode >= 500) console.error(err);

  res
    .status(statusCode)
    .type('text/plain')
    .send(isTrustedError ? err.message : 'Internal server error');
};
