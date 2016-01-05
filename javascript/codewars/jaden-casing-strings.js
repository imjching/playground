// http://www.codewars.com/kata/jaden-casing-strings/javascript

String.prototype.toJadenCase = function () {
  // best practice
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  // clever solution with regex
  // return this.replace(/(^|\s)[a-z]/g, x => x.toUpperCase() );
};