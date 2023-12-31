function isFive(num) {
  if(num === 5) {
    return true;
  }
  return false;
}

function isOdd(number) {
  if(typeof number !== 'number') {
    throw new Error('The input should be a number.')
  }
  if(number % 2 === 0) {
    return false;
  }
  return true;
}

function myRange(min, max, step = 1) {
  let arr = [];
  for(let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };
