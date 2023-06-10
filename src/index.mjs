import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { IsRequiredError } = require('./IsRequiredError.js');

const { isRequired } = require('./index.js');

export { isRequired, IsRequiredError };
