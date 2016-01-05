//http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits
//Given a non-negative integer, return an array containing a list of independent digits in reverse order.
//348597 => [7,9,5,8,4,3]
function digitize(n) {
  return new String(n).split('').reverse().map(e => parseInt(e));

  //using Array.from method
  //return Array.from(String(n), Number).reverse();

  //clever, number + '' = String
  //return (n + '').split('').map(Number).reverse();
}