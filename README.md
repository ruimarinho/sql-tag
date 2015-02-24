# sql-tag

A template tag for writing elegant sql strings based on [ES6 tagged template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings).

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

var out = sql`SELECT * FROM "Foo" WHERE id = ${1}`;
// => { query: 'SELECT * FROM "Foo WHERE id = ?', values: [1] }
```

The tag itself is framework agnostic. It should just require a small modification to the query generator function.

**NOTE**: the `sql` tag does not provide any kind of escaping safety. It delegates that work to the underlying framework.

### Integrating with [sequelize](https://github.com/sequelize/sequelize)

Check out the [sequelize-sql-tag](https://www.npmjs.com/sequelize-sql-tag) plugin.

### Integrating with [pg](https://github.com/brianc/node-postgres)

Check out the [pg-sql-tag](https://www.npmjs.com/pg-sql-tag) plugin.

## Tests

```
$ npm test
```

## Credits

Inspired by the awesome [Taras Mitran](https://github.com/qooleot) [post](http://ivc.com/blog/better-sql-strings-in-io-js-nodejs-part-2/).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/sql-tag.svg
[npm-url]: https://www.npmjs.com/package/sql-tag
[travis-image]: https://travis-ci.org/seegno/sql-tag.svg
[travis-url]: https://travis-ci.org/seegno/sql-tag
