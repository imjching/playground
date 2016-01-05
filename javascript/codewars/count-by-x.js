// http://www.codewars.com/kata/count-by-x

//Create a function with two arguments that will return a list of length (n)
//with multiples of (x).

//Assume both the given number and the number of times to count will be
//positive numbers greater than 0.

// approach 1: obtaining a number, finding the remaining and check
function countBy(x, n) {
  var z = [];

  var count = 1;
  while (z.length < n) {
    if (count % x === 0) {
      z.push(count);
    }
    count++;
  }

  return z;
}

// smarter approach: going back to the fundamentals
function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}

// using es6
function countBy(x, n) {
  return Array.from({length: n}, (v, k) => (k + 1) * x);
}
// Generate a sequence of numbers
//Array.from({length: 5}, (v, k) => k);
// [0, 1, 2, 3, 4]