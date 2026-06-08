const ApiError = require('../utils/ApiError');

const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const schemaMap = schema?.validateAsync ? { body: schema } : schema;

      for (const key in schemaMap) {
        const value = await schemaMap[key].validateAsync(req[key]);
        req[key] = value;
      }

      next();
    } catch (error) {
      throw new ApiError(400, error.details?.[0]?.message || error.message);
    }
  };
};

module.exports = validate;
