'use strict';

module.exports = function() {
  let length = arguments.length;
  let args = new Array(length);

  for (let i = 0; i < length; ++i) {
    args[i] = arguments[i];
  }

  let query = args[0];
  let values = args.slice(1);

  return {
    query: query.join('?'),
    values: values
  };
};
