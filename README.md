# sql-tag

A template tag for writing elegant parameterized SQL queries based on [ES2015 tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals).

Compatible with [pg](#integration-with-pgpg-native), [pg-native](#integration-with-pgpg-native), [mysql](#integration-with-mysqlmysql2) and [mysql2](#integration-with-mysqlmysql2). Read more about [sequelize](#integration-with-sequelize) support.

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```bash
$ npm install sql-tag
```

## Usage

#### Arguments
1. `query` *(string)*: The sql query.
2. `[...*]` *(...\*)*: The query replacements.

#### Returns
*(Object)*: A structured object with the sql query string and its replacements.

#### Examples
```js
const sql = require('sql-tag');

const out = sql`SELECT * FROM biz WHERE id = ${'foo'}`;
// => { query: 'SELECT * FROM biz WHERE id = $1', values: ['foo'] }
```

```js
const sql = require('sql-tag');
const foo = 'bar';

const out = sql`SELECT * FROM biz
  WHERE id = ${foo}
`;
// => { query: 'SELECT * FROM biz WHERE id = $1', values: ['bar'] }
```

The tag itself is framework agnostic. It should just require a small modification to the query generator function.

**NOTE**: the `sql` tag does not provide any kind of escaping safety. It delegates that work to the underlying framework.

### Integration with [pg](https://github.com/brianc/node-postgres)/[pg-native](https://github.com/brianc/node-pg-native)

The output format is `sql-tag` is directly compatible with `pg` and `pg-native` parameterized queries.

```js
const pg = require('pg');
const client = new pg.Client();
const sql = require('sql-tag');

client.connect(function (err) {
  if (err) throw err;

  client.query(sql`SELECT * FROM foo WHERE id = ${'foo'}`).then(console.log);
});
```

### Integration with [mysql](https://www.npmjs.com/package/mysql)/[mysql2](https://www.npmjs.com/package/mysql2)

```js
const mysql = require('mysql');
const connection = mysql.createConnection({ user: 'root', password: 'root' });
const sql = require('sql-tag');

connection.query(sql`SELECT * FROM foo WHERE id = ${'foo'}`, (err, rows) => console.log(err, rows));
```

### Integration with [sequelize](https://github.com/sequelize/sequelize)

Sequelize requires a special format to be able to handle parameterized queries. Check out the [sequelize-sql-tag](https://www.npmjs.com/sequelize-sql-tag) plugin which builds on top of `sql-tag` to provide this functionality.

## Tests

```sh
npm test
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/sql-tag.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sql-tag
[travis-image]: https://img.shields.io/travis/seegno/sql-tag.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/sql-tag
