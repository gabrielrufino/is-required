const { IsRequiredError } = require('./IsRequiredError.js');

/**
 * Throws an error when an expected parameter is not defined.
 * @param {Object} args
 * @param {String} args.param
 */
function isRequired({
  param,
}) {
  throw new IsRequiredError({ param });
}

exports.isRequired = isRequired;
