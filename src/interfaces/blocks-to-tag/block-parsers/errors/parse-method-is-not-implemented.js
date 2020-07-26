class ParseMethodIsNotImplemented extends Error {
  constructor(className) {
    super(`Parse Error method is not implemented on class ${className}`);
  }
}

module.exports = ParseMethodIsNotImplemented;
