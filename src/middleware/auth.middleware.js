import { Buffer } from 'node:buffer';
import { AppError } from '../utils/AppError.js';

export const basicAuth = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return next(new AppError('Authorization header is required', 401));
  }

  if (!authHeader.startsWith('Basic ')) {
    return next(new AppError('Basic authorization is required', 401));
  }

  const encodedCredentials = authHeader.split(' ')[1];

  const credentials = Buffer.from(encodedCredentials, 'base64').toString(
    'utf8',
  );

  const [username, password] = credentials.split(':');

  if (username === 'admin' && password === 'admin123') {
    req.user = {
      username,
      role: 'admin',
    };
    return next();
  }

  if (username === 'user' && password === 'user123') {
    req.user = {
      username,
      role: 'user',
    };
    return next();
  }

  next(new AppError('Invalid credentials', 401));
};
