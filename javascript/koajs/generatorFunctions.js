// demo without generator functions
var foo = function(callback) {
  return callback('foo');
};

var bar = function(data, callback) {
  return callback(data + ' bar');
}

var baz = function(data1, data2, callback) {
  var i = data1 + ' ' + data2 + ' baz';
  return callback(i === 'foo foo bar baz');  
}

// callbacks -> "callback hell"
foo(function(a) {
  bar(a, function(b) {
    baz(a, b, function(c) {
      console.log(c);
      // and more...
    });
  });
});

// demo with generator functions
// to eliminate callback hell, we need a coroutine framework
// https://rethinkdb.com/blog/node-4/
// https://github.com/tj/co

var foo1 = function* () {
  return 'foo';
};

var bar1 = function* (data) {
  return data + ' bar';
}

var baz1 = function* (data1, data2) {
  var i = data1 + ' ' + data2 + ' baz';
  return i === 'foo foo bar baz';  
}

// writing non-blocking code in a better way
var co = require('co');
co(function* () {
  var a = yield foo1(); // foo
  var b = yield bar1(a); // foo bar
  var c = yield baz1(a, b);
  console.log(c);
});

// if you do not have a coroutine framework:
// var a = foo1().next();
// you need to call the next().value function on the generator function that is being returned
// http://tobyho.com/2013/06/16/what-are-generators/
