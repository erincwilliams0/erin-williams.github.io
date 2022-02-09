// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return function(val) {
    //     if(base > val) {
    //         return false;
    //     } else if(base < val) {
    //         return true;
    //     }
    // }
    return function(value) {
        return value > base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function passing value as a parameter
    return function(value) {
        //inside nested function return val < base
        return value < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a function that takes a string as its parameter
    return function(str) {
    // return 0 index of string made lowercase and test if strictly equal to startsWith made lowercase?
    return str.toLowerCase().charAt(0) === startsWith.toLowerCase();    
    }
        
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return a function that passes a string as its parameter
    return function(str) {
        // return last index of string made lowercase testing if strictly equal to endsWith character made lowercase
        return str.toLowerCase().charAt(str.length - 1) === endsWith.toLowerCase();
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create output array
    var output = [];
        // make for loop to loop through strings array
        for(let i = 0; i < strings.length; i++) //start with i at zero; stop when i reaches strings array length; decrement
        {
        // call modify on each index of strings and push to output array
        output.push(modify(strings[i]));
           }
           // return output array
    return output;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // create variable to hold output array if all test pass
    var result;
    // loop over strings array
    for(let i = 0; i < strings.length; i++) {
        // for each iteration call test on strings using an if statement, if false return false; if true set result to true
        if(test(strings[i]) === false) {
            return false;
        }else if(test(strings[i]) === true) {
            result = true;
        }
    }
        //return result
    return result;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
