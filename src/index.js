'use strict';

/**
 * Export `sql-tag`.
 */

export default function sqltag(query, ...values) {
  return {
    sql: query.reduce((result, part) => `${result}?${part}`),
    text: query.reduce((result, part, index) => `${result}$${index}${part}`),
    values
  };
}
