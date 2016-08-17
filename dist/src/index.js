'use strict';

/**
 * Regular expressions used for cleaning up the sql query.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sqltag;
const control = /[\t\r\n]+/gm;
const whitespace = /\s+/gm;

/**
 * Trim sql query.
 */

function trim(sql) {
  return sql.replace(control, '').replace(whitespace, ' ').trim();
}

/**
 * Export `sql-tag`.
 */

function sqltag(query) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return {
    sql: trim(query.reduce((result, part) => `${ result }?${ part }`)),
    text: trim(query.reduce((result, part, index) => `${ result }$${ index }${ part }`)),
    values: values
  };
}
module.exports = exports['default'];