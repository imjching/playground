// http://www.codewars.com/kata/largest-elements/javascript
// Write a program that outputs the top n elements from a list.

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest(n,xs){
  if (n === 0) return [];
  return xs.sort((a, b) => a-b).slice(-n);
  // remove everything except the last n
}

// shorter
function largest(n,xs){
  return xs.sort((a, b) => a-b).slice(xs.length - n);
  // remove the first xs.length - n elements, leaving only n
}