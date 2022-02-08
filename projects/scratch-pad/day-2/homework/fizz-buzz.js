// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    // create for loop that starts i at 0; stops at 100; increments
    for(let i = 1; i <= 100; i++) {
        //use if else if chain to test each iteration for multiples of three, five, both three and five,
        if((i % 3) === 0 && (i % 5) === 0) {
            console.log("FizzBuzz")
        }else if(i % 3 === 0) {
            // log Fizz
            console.log("Fizz")
        } else if (i % 5 === 0) {
            //log Buzz
            console.log("Buzz")
        } else {
        // log each number that is not a multiple of three or five
        console.log(i)
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}