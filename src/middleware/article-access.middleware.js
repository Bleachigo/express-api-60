import { AppError } from '../utils/AppError.js';

export const checkArticleAccess = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(new AppError('Access denied', 403));
  }

  next();
};
