import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { isRequired } = require('./index.js')
const { IsRequiredError } = require('./IsRequiredError.js')

export { isRequired, IsRequiredError }
