// Exercise 29: Traversing an Event

// Subscribing to an Event and traversing an Array are fundamentally the same
// operation. The only difference is that Array traversal is synchronous and
// completes, and Event traversal is asynchronous and never completes. If we
// convert a button click Event to an Observable object, we can use forEach()
// to traverse the Event.

function(button) {
  var buttonClicks = Observable.fromEvent(button, "click");

  // In the case of an Observable, forEach returns a subscription object.
  var subscription =
    buttonClicks.
      forEach(function(clickEvent) {
        alert("Button was clicked. Stopping Traversal.");

        // Stop traversing the button clicks
        subscription.dispose();
      });
}