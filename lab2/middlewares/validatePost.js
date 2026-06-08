const ApiError = require('../utils/ApiError');

module.exports = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return next(new ApiError(400, 'title and content are required'));
  }
  next();
};
