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



