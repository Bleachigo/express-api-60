import { AppError } from '../utils/AppError.js';

export const basicAuth = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return next(new AppError('Authorization header is required', 401));
  }

  next();
};
