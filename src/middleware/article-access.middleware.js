import { AppError } from '../utils/AppError.js';

export const checkArticleAccess = (req, res, next) => {
  const role = req.headers['x-role'];

  if (!role) {
    return next(new AppError('Role header is required', 401));
  }

  if (role !== 'admin') {
    return next(new AppError('Access denied', 403));
  }

  next();
};
