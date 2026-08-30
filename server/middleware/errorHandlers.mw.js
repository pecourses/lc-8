const mongoose = require('mongoose');

module.exports.mongooseErrorHandler = (err, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    const errors = {};

    for (const [field, error] of Object.entries(err.errors)) {
      errors[field] = error.message;
    }

    return res.status(400).json({
      message: 'Validation error',
      errors,
    });
  }
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      message: 'Invalid value',
      field: err.path,
      value: err.value,
    });
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  console.log(err);
  const status = err.status || 500;
  const message = err.message || 'Server Error';

  res.status(status).send({
    errors: [
      {
        status,
        detail: message,
      },
    ],
  });
};
