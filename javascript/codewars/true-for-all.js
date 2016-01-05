//http://www.codewars.com/kata/enumerable-magic-number-1-true-for-all

function all(arr, fun) {
  return arr.length == arr.filter(fun).length;
}

// simpler
function all(arr, fun) {
  return arr.every(fun);
}

// to create an alias of every to all
var all = Function.prototype.call.bind(Array.prototype.every);
