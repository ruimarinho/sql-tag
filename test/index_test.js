'use strict';

/**
 * Test `sql-tag`.
 */

import sql from '../src';

describe('sql-tag', () => {
  it('should support template strings with placeholders', () => {
    const out = sql`SELECT ${'bar'} FROM "Foo" WHERE bar = ${1} AND baz IN (${['biz']})`;

    out.should.eql({
      query: 'SELECT ? FROM "Foo" WHERE bar = ? AND baz IN (?)',
      values: ['bar', 1, ['biz']]
    });
  });

  it('should support template strings without placeholders', () => {
    const out = sql`SELECT * FROM "Foo"`;

    out.should.eql({
      query: 'SELECT * FROM "Foo"',
      values: []
    });
  });
});
