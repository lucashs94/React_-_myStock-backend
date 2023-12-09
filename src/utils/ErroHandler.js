const AppError = require('../utils/AppError')

const ErrorHandler = (err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    })
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
}

module.exports = ErrorHandler