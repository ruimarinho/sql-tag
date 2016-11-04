'use strict';

/**
 * Export `sql-tag`.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sqltag;
function sqltag(query) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return {
    sql: query.reduce((result, part) => `${ result }?${ part }`),
    text: query.reduce((result, part, index) => `${ result }$${ index }${ part }`),
    values: values
  };
}
module.exports = exports['default'];