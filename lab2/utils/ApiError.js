class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static BadRequest(msg = 'Bad Request') {
    return new ApiError(400, msg);
  }

  static NotFound(msg = 'Not Found') {
    return new ApiError(404, msg);
  }
}

module.exports = ApiError;
