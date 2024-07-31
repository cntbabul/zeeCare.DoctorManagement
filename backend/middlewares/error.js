class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // If the error code is 11000, it means that the MongoDB's unique index constraint has been violated. This means that the user is trying to insert a document with a field that already exists in the database. In this case, we create a new error object with a message indicating which field is duplicated and set the status code to 400 (Bad Request).
  if (err.code === 11000) {
    const key = Object.keys(err.keyValue)[0]; // Object.keys(err.keyValue) returns an array with the names of the fields that violated the unique index constraint. We take the first element of this array and assign it to the "key" variable.
    const message = `Duplicate ${key} entered`,
      err = new ErrorHandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again!`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired, Try again!`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`,
      err = new ErrorHandler(message, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    // message: err.message,
    message: errorMessage,
  });
};

export default ErrorHandler;
