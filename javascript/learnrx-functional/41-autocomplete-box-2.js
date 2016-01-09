// Exercise 41: Autocomplete Box Part 2: Electric Boogaloo

function (getSearchResultSet, keyPresses, textBox) {

  var getSearchResultSets =
    keyPresses.
      map(function () {
        return textBox.value;
      }).
      throttle(1000).

      // TODO: Make sure we only get distinct values

      // TODO: Make sure the text is not empty

      concatMap(function (text) {
        return getSearchResultSet(text).takeUntil(keyPresses);
      });

  return getSearchResultSets;
}