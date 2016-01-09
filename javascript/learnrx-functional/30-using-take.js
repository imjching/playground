// Exercise 30: Completing Sequences with take()

function(button) {
  var buttonClicks = Observable.fromEvent(button, "click");

  // Use take() to listen for only one button click
  // and unsubscribe.
  buttonClicks.
    // Insert take() call here
    forEach(function(clickEvent) {
      alert("Button was clicked once. Stopping Traversal.");
    });
}