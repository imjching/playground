// Exercise 28: Subscribing to an event

// You're probably used to thinking about events as a list of handlers stored
// in an object. In this example, we subscribe to a button click event and then
// unsubscribe the first time the button is clicked.

function(button) {
  // the button click handler
  var handler = function(ev) {
    // Unsubscribe from the button event.
    button.removeEventListener("click", handler);

    alert("Button was clicked. Unsubscribing from event.");
  };

  // add the button click handler
  button.addEventListener("click", handler);
}