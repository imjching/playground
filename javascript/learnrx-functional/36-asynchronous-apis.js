// Exercise 36: Traversing callback-based Asynchronous APIs

function(window, $) {
  var getJSON = function(url) {
    return Observable.create(function(observer) {
      var subscribed = true;

      $.getJSON(url,
        {
          success:
            function(data) {
              // If client is still interested in the results, send them.
              if (subscribed) {
                // Send data to the client
                observer.onNext(data);
                // Immediately complete the sequence
                observer.onCompleted();
              }
            },
          error: function(ex) {
            // If client is still interested in the results, send them.
            if (subscribed) {
              // Inform the client that an error occurred.
              observer.onError(ex);
            }
          }
        });

      // Definition of the Subscription objects dispose() method.
      return function() {
        subscribed = false;
      }
    });
  };

  var subscription =
    getJSON("http://api-global.netflix.com/abTestInformation").
      forEach(
        // observer.onNext()
        function(data) {
          alert(JSON.stringify(data));
        },
        // observer.onError()
        function(err) {
          alert(err)
        },
        // observer.onCompleted()
        function() {
          alert("The asynchronous operation has completed.")
        });
}