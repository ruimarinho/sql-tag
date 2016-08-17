'use strict';

/**
 * Regular expressions used for cleaning up the sql query.
 */

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

export default function sqltag(query, ...values) {
  return {
    sql: trim(query.reduce((result, part) => `${result}?${part}`)),
    text: trim(query.reduce((result, part, index) => `${result}$${index}${part}`)),
    values
  };
}
