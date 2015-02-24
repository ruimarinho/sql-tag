'use strict';

/**
 * Test `sql-tag`.
 */

let sql = require('..');

describe('sql-tag', function() {
  it('should support template strings with placeholders', function() {
    let out = sql`SELECT ${'bar'} FROM "Foo" WHERE bar = ${1} AND baz IN (${['biz']})`;

    out.should.eql({
      query: 'SELECT ? FROM "Foo" WHERE bar = ? AND baz IN (?)',
      values: ['bar', 1, ['biz']]
    });
  });

  it('should support template strings without placeholders', function() {
    let out = sql`SELECT * FROM "Foo"`;

    out.should.eql({
      query: 'SELECT * FROM "Foo"',
      values: []
    });
  });
});
