////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
// use an if else statement to return the minimum of the two arguments passed in
if(x > y) {
  return y;
} else {
  return x;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(x) {
if(x === 0 || x % 2 === 0) {
  return true;
} else {
  return false;
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
// create count variable set to 0
var count = 0;
//loop through string testing if each index matches char, if true increment count variable
for(let i = 0; i < string.length; i++) {
  if(string[i] === char) {
    count++
  }
}
// return count
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
// create count variable
let count = 0;
// loop through string test if each index is the letter B, if so increment count
for(let i = 0; i < string.length; i++) {
  if(string[i] === "B") {
    count++;
  }
}
//return count
return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
