const { IsRequiredError } = require('./IsRequiredError.js');

const { isRequired } = require('./index.js');

exports.isRequired = isRequired;
exports.IsRequiredError = IsRequiredError;
