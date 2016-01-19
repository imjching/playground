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
