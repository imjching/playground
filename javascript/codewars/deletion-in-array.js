// http://www.codewars.com/kata/deletion-in-an-array/javascript
// Description:
// The deleteValues function takes an array and removes elements that answer true to the pred function.
// For some reason, some of the elements of the array for which the predicate holds are not deleted...
// Can you fix the code?

// ======
// deletion from the back
function deleteValues(array, pred) {
  for(var i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

// only increment i when it is not deleted
// in this case, the second statement of the for loop will change everything (arr.length)
function deleteValues(array, pred) {
  for(var i = 0; i < array.length;) {
    if (pred(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }

    // or, reduce i by 1 after deletion
    //if (pred(array[i])) {
    //  array.splice(i--, 1);
    //}
  }
  return array;
}

// best way to copy an array to a new variable is to use splice()
// another way is to filter, and then push into new array
function deleteValues(array, pred) {
  var filtered = array.filter(e => !pred(e));
  array.length = 0; // reset array elements
  filtered.forEach(e => array.push(e));

  //pushing each element in filtered to array
  //Array.prototype.push.apply(array, filtered);
  //similar to concat, but both are different

  // concat() creates a new array to store result
  // Array.prototype.push.apply(A, [1, 2, ...]) extends array A to store elements
  // Array.prototype.push.apply is slower compared to push with while loop (micro-optimization)

  // Benchmarks: https://jsperf.com/array-prototype-push-apply-vs-concat/20
  return array;
}
