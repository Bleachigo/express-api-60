import { AppError } from '../utils/AppError.js';

export const validateUserInput = (req, res, next) => {
  const { username, password } = req.body ?? {};

  if (
    typeof username !== 'string' ||
    username.trim() === '' ||
    typeof password !== 'string' ||
    password.trim() === ''
  ) {
    return next(
      new AppError('Username and password must be non-empty strings', 400),
    );
  }

  next();
};
