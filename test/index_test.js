'use strict';

/**
 * Test `sql-tag`.
 */

import sql from '../src';

describe('sql-tag', () => {
  it('should support template literals with placeholders', () => {
    const out = sql`
        SELECT * FROM biz
        WHERE foo = ${'bar'}
          AND bar = ${1}
          AND baz IN (${['biz']})
        `;

    out.should.eql({
      sql: `
        SELECT * FROM biz
        WHERE foo = ?
          AND bar = ?
          AND baz IN (?)
        `,
      text: `
        SELECT * FROM biz
        WHERE foo = $1
          AND bar = $2
          AND baz IN ($3)
        `,
      values: ['bar', 1, ['biz']]
    });
  });

  it('should support template literals without placeholders', () => {
    const out = sql`SELECT * FROM biz`;

    out.should.eql({
      sql: 'SELECT * FROM biz',
      text: 'SELECT * FROM biz',
      values: []
    });
  });
});
