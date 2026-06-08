const ApiError = require('../utils/ApiError');

module.exports = (err, req, res, next) => {
  console.error('❌❌ ', err);

  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors || {}).map((e) => e.message);
    return res.status(400).json({
      message: 'Validation failed',
      errors,
    });
  }

  if (err.code === 11000) {
    const message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, value: ${Object.values(err.keyValue)}`;
    return res.status(400).json({ message });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  res.status(500).json({ message: 'something went wrong' });
};
