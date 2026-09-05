export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  const statusCode = err.statusCode || err.status || 500;

  if (statusCode >= 500) console.error(err);

  res
    .status(statusCode)
    .type('text/plain')
    .send(statusCode >= 500 ? 'Internal server error' : err.message);
};
