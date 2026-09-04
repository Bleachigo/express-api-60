export const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} - ${req.method} request to ${req.originalUrl}`,
  );

  next();
};
