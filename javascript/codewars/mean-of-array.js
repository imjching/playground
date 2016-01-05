// http://www.codewars.com/kata/get-the-mean-of-an-array

// obtain the mean of array
function getAverage (marks){
  return parseInt(marks.reduce((p, c) => p + c) / marks.length);
}

// the double tilde here refers to a faster alternative for Math.floor
// ~~(5.6) returns 5
// micro-optimization
// the two bitwise operators cancel off each other, leaving only the conversion
// of the value to an integer before the first tilde is applied
const getAverage = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);