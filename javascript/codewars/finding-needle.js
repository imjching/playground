// http://www.codewars.com/kata/a-needle-in-the-haystack

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return 'found the needle at position 5'

// long method
function findNeedle(haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position ' + i;
    }
  }
  return '';
}

// shorter, using indexOf
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// or string interpolation
const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`;