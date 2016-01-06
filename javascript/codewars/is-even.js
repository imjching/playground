// check if a number is even
// http://www.codewars.com/kata/javascript-array-filter/javascript

// normal solution
function getEvenNumbers(numbersArray){
  return numbersArray.filter(e => e % 2 == 0);

  // or
  // return numbersArray.filter(e => !(e % 2));

  // or, with bitwise operators
  // number is even if the last bit is 0
  // e & 1 returns 1 if number is odd
  // return numbersArray.filter(e => !(e & 1));
}