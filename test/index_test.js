'use strict';

/**
 * Test `sql-tag`.
 */

import sql from '../src';

describe('sql-tag', () => {
  it('should support template strings with placeholders', () => {
    const out = sql`SELECT * FROM "Foo" WHERE foo = ${'bar'} AND bar = ${1} AND baz IN (${['biz']})`;

    out.should.eql({
      sql: 'SELECT * FROM "Foo" WHERE foo = ? AND bar = ? AND baz IN (?)',
      text: 'SELECT * FROM "Foo" WHERE foo = $1 AND bar = $2 AND baz IN ($3)',
      values: ['bar', 1, ['biz']]
    });
  });

  it('should support template strings without placeholders', () => {
    const out = sql`SELECT * FROM "Foo"`;

    out.should.eql({
      sql: 'SELECT * FROM "Foo"',
      text: 'SELECT * FROM "Foo"',
      values: []
    });
  });
});
