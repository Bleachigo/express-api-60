import { AppError } from '../utils/AppError.js';

export const validateUserInput = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError('Username and password are required', 400));
  }

  next();
};
