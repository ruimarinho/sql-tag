'use strict';

export default function sqltag(query, ...values) {
  return {
    query: query.join('?'),
    values
  };
}
