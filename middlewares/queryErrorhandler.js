// middleware que maneja los errores se sequelize

const { ValidationError } = require('sequelize');

const queryErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError)
    {
      res.status(409).json({
        statusCode: 409,
        message: err.name,
        errors: err.errors
      });
    }
  next(err);
};

module.exports = {queryErrorHandler};
