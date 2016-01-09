// Exercise 31: Completing sequences with takeUntil()

function(pricesNASDAQ, printRecord, stopButton) {
  var stopButtonClicks = // ----- To finish this expression, use Observable.fromEvent to convert the "click" event on the stop button to an Observable
    microsoftPrices =
      pricesNASDAQ.
        filter(function(priceRecord) {
          return priceRecord.name === "MSFT";
        }).
        // ----- To finish this expression, use takeUntil to complete the sequence when stopButtonClicks fires.

  microsoftPrices.
    forEach(function(priceRecord) {
      printRecord(priceRecord);
    });
}