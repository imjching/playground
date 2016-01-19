function Stack () {

  // array to store all the stack's elements
  var items = [];

  // adds a new item to top of the stack
  this.push = function (e) {
    items[items.length] = e; // 43% faster compared to items.push(); in V8/Chrome
    // http://jsperf.com/push-item-inside-an-array
  }

  // removes item from top of the stack and returns it
  this.pop = function (e) {
    return items.pop();
  }

  // returns top element in stack
  this.peek = function () {
    return items[items.length - 1];
  }

  // check if stack is empty
  this.isEmpty = function () {
    return items.length == 0;
  }

  // remove all elements in stack
  this.clear = function () {
    items = [];
  }

  // returns the size of the stack
  this.size = function () {
    return items.length;
  }

  // toString
  this.print = function () {
    console.log(items.toString());
  }
}

// Testing
var stack = new Stack();
console.log(stack.isEmpty()); // should return true

stack.push(16);
stack.push(87);

console.log(stack.peek()); // should show 87

stack.push(10);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false

stack.push(76);
stack.pop();
stack.pop();
console.log(stack.size()); // 2
stack.print(); // should be [16, 87]

// Applications of stack data structure
// ====================================

// Converting decimal to binary using the remainder method
// Recursively dividing the decimal number by 2

function decToBin (number) {
  var remainder = new Stack();

  while (number > 0) {
    remainder.push(number % 2);
    number = ~~(number / 2); // round down
  }

  var bin = ''; // initialize a string
  while (!remainder.isEmpty()) {
    bin += remainder.pop();
  }

  return Number(bin);
}

console.log(decToBin(10)); //1010
console.log(decToBin(16)); //10000

// Converting decimal to any base using the remainder method

function convertDec (number, base) {
  var remainder = new Stack();
  var possibleValues = '0123456789ABCDEF';

  while (number > 0) {
    remainder.push(number % base);
    number = ~~(number / base); // round down
  }

  var bin = ''; // initialize a string
  while (!remainder.isEmpty()) {
    bin += possibleValues[remainder.pop()];
  }

  return bin;
}

console.log(convertDec(10, 16)); //0xA
console.log(convertDec(167, 16)); //0xA7
console.log(convertDec(16, 16)); //0x10

// Balanced parenthesis. Checks if a string with parenthesis is balanced

function isPairParent (p1, p2) { // checks if p1 and p2 are pairs
  var obj = { '[' : ']', '{' : '}', '(' : ')', '<' : '>' };
  return obj[p1] && obj[p1] == p2;
}

function balParent (input) {
  var stack = new Stack();

  for (var i = 0; i < input.length; i++) {
    var p = input[i]; // getting the character

    if (~['[', '{', '(', '<'].indexOf(p)) { // if p is either one
      stack.push(p);
    } else if (isPairParent(stack.peek(), p)) { // if pairs
      stack.pop();
    } else if (~[']', '}', ')', '>'].indexOf(p)) { // do not need to loop further if character is a closing parenthesis
      return false; // not balanced at all
      // ignore if contains other characters
    }
  }

  // all passed provided stack is empty
  return stack.isEmpty();
}

var tests = ['()[]<>{}', '(<', ']}', '()<', '(][)', '{(X)[XY]}', '((()))', '(()', '[{aaa<bb>dd}]<232>', '[ff{<gg}]<ttt>', '{<}>'];
            // true, false, false, false, false, true, true, false, true, false, false
tests.forEach(function (e) {
  console.log(balParent(e));
});


