
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // create for loop that starts i at 0; stops at 100; increments
  for(let i = 1; i <= 15; i++) {
    //use if else if chain to test each iteration for multiples of three, five, both three and five,
    if((i % 3) === 0 && (i % 5) === 0) {
        console.log("fizzbuzz")
    }else if(i % 3 === 0) {
        // log Fizz
        console.log("fizz")
    } else if (i % 5 === 0) {
        //log Buzz
        console.log("buzz")
    } else {
    // log each number that is not a multiple of three or five
    console.log(i)
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
