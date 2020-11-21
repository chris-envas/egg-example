'use strict';

const R = require('ramda');
const func = R.curry((a, b) => [ a, b ]);

// console.log(func(1, 2));
// console.log(func(1)(2));
// console.log(func(R.__, 2)(1));

function curry(fn) {
  // 获取函数长度
  const length = fn.length;
  let args = [];
  const dg = (...arg) => {
    args = args.concat(arg);
    if (args.length === length) {
      return fn(...args);
    }
    return dg;

  };
  return dg();
}

const func2 = curry((a, b) => [ a, b ]);

console.log(func2(1)(2));
