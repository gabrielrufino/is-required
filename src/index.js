import { IsRequiredError } from './IsRequiredError.js'

/**
 * Throws an error when an expected parameter is not defined.
 * @param {Object} args
 * @param {String} args.param
 */
export function isRequired ({
  param
}) {
  throw new IsRequiredError({ param })
}
