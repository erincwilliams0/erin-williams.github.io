// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
   //create a for loop to iterate over an array and print each value
   for(let i = 0; i < array.length; i++) //set starting point to 0 end point to < array.length and increment
  {
    // console.log array[i] for each iteration
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // create a for loop to iterate thourgh an array
  for(let i = array.length - 1; i >= 0; i--) // start at i = array.length - 1; end at 0; decrement
  {
    // log value at each iteration
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create output array
  let output = [];
    // use a for in loop to iterate through key/value pairs
    for(var key in object) {
  // push key to output for each iteration
  output.push(key);
    }
    //return output array
  return output;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create a for in loop to iterate through parameter object
  for(var key in object) {
    //log key for each iteration
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create output variable
  var output = [];
    // create a for in loop to iterate through object
    for(var key in object) {
    // push values (object[key]) to output for each iteration
    output.push(object[key])
    }
    // return output array
  return output;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create for in loop for object
  for(var key in object) {
    // log object[key] for each iteration
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create variable to hold count
  var count = 0;
    //use a for in loop to iterate through object
    for(var key in object) {
    //increment count variable each iteration
      count += 1;
  }
      //return count
  return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create output array to index object values
  var output = [];
    // create a for in loop to iterate through object
    for(var key in object) {
    //push object[key] to output array
      output.push(object[key]);
  }
      //create for loop to loop through output array
      for(let i = output.length - 1; i >= 0; i--)//start at output.length -1, run till >= 0, decrement
      {
      //log output[i] for each iteration
        console.log(output[i]);
    }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
