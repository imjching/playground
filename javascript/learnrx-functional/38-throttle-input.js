// Exercise 38: Throttle Input

function (clicks, saveData, name) {
  return clicks.
    // TODO: Throttle the clicks so that it only happens every one second
    concatMap(function () {
      return saveData(name);
    });
}