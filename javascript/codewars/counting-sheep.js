// http://www.codewars.com/kata/counting-sheep-dot-dot-dot/javascript

// to count true values in an array
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(e => e).length;
}

// or
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// longer way
function countSheeps(arrayOfSheep) {
  var num = 0;
  arrayOfSheep.forEach(function (i) {
    if (i) num++;
  });
  return num;
}

// we could also use reduce
function countSheeps(arrayOfSheep) {
  // reduce => (prev, curr, index, array)
  return arrayOfSheep.reduce(function (prev, curr) {
    return prev + (curr || 0);
  });
}
