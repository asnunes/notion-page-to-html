function _isItAlreadyNormalized(id) {
  return id.length === 36;
}

function _normalizeId(rawId) {
  return `${rawId.substr(0, 8)}-${rawId.substr(8, 4)}-${rawId.substr(12, 4)}-${rawId.substr(
    16,
    4
  )}-${rawId.substr(20)}`;
}

module.exports = function (id) {
  return !id || _isItAlreadyNormalized(id) ? id : _normalizeId(id);
};
