exports.IsRequiredError = class IsRequiredError extends Error {
  constructor ({
    param
  }) {
    super(`${param} is required`)
    this.name = IsRequiredError.name
  }
}
