export const logRequest = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  res.on('finish', () => {
    console.log(
      `${hours}:${minutes}:${seconds} - ${req.method} request to ${req.originalUrl} - ${res.statusCode}`,
    );
  });

  next();
};
