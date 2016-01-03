var sleep = require('co-sleep');

module.exports = function *() {
  yield sleep(1000);
  return 'hello generator';
};

// tests will fail this way, so alternatives:
// 1. thunkify the function (taking a normal node with a callback pattern so we can yield)
// 2. co-sleep
// module.exports = function *() {
//   setTimeout(function() {
//     return 'hello generator';
//   }, 1000);
// };

// when using it outside koa.js
// var co = require('co');
// var sleep = require('co-sleep');

// co(function* (){
//   console.log('1');
//   yield sleep(1000);
//   console.log('3');
// });

// console.log('2');

// returns 1, 2, 3