// Exercise 18: Retrieve url of the largest boxart

// Let's try combining reduce() with map() to reduce multiple boxart objects to a
// single value: the url of the largest box art.

function() {
  var boxarts = [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

  // You should return an array containing only the URL of the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.reduce(function(old, new_) {
    var old_size = old.width * old.height;
    var new_size = new_.width * new_.height;
    return (old_size > new_size) ? old : new_;
  }).map(function(e) {
    return e.url;
  });
}
