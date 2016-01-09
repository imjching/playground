// Exercise 37: Sequencing HTTP requests with Observable

// Let's use the getJSON function that returns Observables, and the
// Observable.fromEvent() to complete the exercise we completed earlier.

function(window, getJSON, showMovieLists, showError) {
  var movieListsSequence =
    Observable.zip(
      getJSON("http://api-global.netflix.com/abTestInformation").
        concatMap(function(abTestInformation) {
          return Observable.zip(
            getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/config").
              concatMap(function(config) {
                if (config.showInstantQueue) {
                  return getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/queue").
                    map(function(queueMessage) {
                      return queueMessage.list;
                    });
                }
                else {
                  return Observable.returnValue(undefined);
                }
              }),
            getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/movieLists"),
            function(queue, movieListsMessage) {
              var copyOfMovieLists = Object.create(movieListsMessage.list);
              if (queue !== undefined) {
                copyOfMovieLists.push(queue);
              }

              return copyOfMovieLists;
            });
        }),
      Observable.fromEvent(window, "load"),
      function(movieLists, loadEvent) {
        return movieLists;
      });

  movieListsSequence.
    forEach(
      function(movieLists) {
        showMovieLists(movieLists);
      },
      function(err) {
        showError(err);
      });
}