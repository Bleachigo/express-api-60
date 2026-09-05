export const resTextFormat = (req, res, next) => {
  res.type('text/plain');
  next();
};
