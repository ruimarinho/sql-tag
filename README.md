# sql-tag

A template tag for writing elegant parameterized SQL queries based on [ES2015 tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals).

Compatible with [pg](https://github.com/brianc/node-postgres), [pg-native](https://github.com/brianc/node-pg-native), [mysql](https://www.npmjs.com/package/mysql) and [mysql2](https://www.npmjs.com/package/mysql2).

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

#### Example
```js
var sql = require('sql-tag');

var out = sql`SELECT * FROM foo WHERE id = ${'foo'}`;
// => { query: 'SELECT * FROM foo WHERE id = $1', values: ['foo'] }
```

The tag itself is framework agnostic. It should just require a small modification to the query generator function.

**NOTE**: the `sql` tag does not provide any kind of escaping safety. It delegates that work to the underlying framework.

### Integration with [pg](https://github.com/brianc/node-postgres)/[pg-native](https://github.com/brianc/node-pg-native)

The output format is `sql-tag` is directly compatible with `pg` and `pg-native` parameterized queries.

```js
var pg = require('pg');
var client = new pg.Client();
var sql = require('sql-tag');

client.connect(function (err) {
  if (err) throw err;

  client.query(sql`SELECT * FROM foo WHERE id = ${'foo'}`).then(console.log);
});
```

### Integration with [mysql](https://www.npmjs.com/package/mysql)/[mysql2](https://www.npmjs.com/package/mysql2)

```js
var mysql = require('mysql');
var connection = mysql.createConnection({ user: 'root', password: 'root' });
var sql = require('sql-tag');

connection.query(sql`SELECT * FROM foo WHERE id = ${'foo'}`, (err, rows) => console.log(err, rows));
```

### Integration with [sequelize](https://github.com/sequelize/sequelize)

Sequelize requires a special format to be able to handle parameterized queries. Check out the [sequelize-sql-tag](https://www.npmjs.com/sequelize-sql-tag) plugin for it.

## Tests

```
$ npm test
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/sql-tag.svg
[npm-url]: https://www.npmjs.com/package/sql-tag
[travis-image]: https://travis-ci.org/seegno/sql-tag.svg
[travis-url]: https://travis-ci.org/seegno/sql-tag
