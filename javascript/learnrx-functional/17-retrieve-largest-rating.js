// Exercise 17: Retrieve the largest rating.

// Let's use our new reduce function to isolate the largest value in an
// array of ratings.

function() {
  var ratings = [2,3,1,4,5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.reduce(function(old, new_) {
    return old > new_ ? old : new_;
  });
}

// Nice work. Now let's try combining reduce() with our other functions to
// build more complex queries.