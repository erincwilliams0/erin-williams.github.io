// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';



var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(typeof value === 'string') {
        return "string";
    } else if(typeof value === 'boolean') {
        return "boolean"
    } else if(Array.isArray(value)) {
        return "array"
    } else if(typeof value === 'number') {
        return "number";
    } else if(value === null) {
        return "null";
    } else if(value instanceof Date) {
        return "date"
    } else if(typeof value === 'function') {
        return "function"
    } else if(value === undefined) {
        return "undefined"
    } else {
        return "object"
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num) {
   var output = [];
    // using if statements test arr parameter to see if its an array, if not return an empty array
    //next test num parameter, if num is nan or undefined return zero index of array, if num is a negative number return empty array, if number is greater than array length return arr
    if(!Array.isArray(arr) || num < 0) {
        return [];
    } else if(num === undefined || num === NaN) {
        return arr[0];
    } else if(num > arr.length) {
        return arr;
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(num > 0) {
                output.push(arr[i]);
                num--;
            }
        }
    }
    return output;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
    // create output array
    var output = [];
    //test arr and num parameters, if arr is not an array or num is a negative number return [], if num is undefined or nan return last index of arr, if num > arr.length return arr
    if(!Array.isArray(arr) || num < 0) {
        return [];
    } else if(num === undefined || num === NaN) {
        return arr[arr.length - 1];
    } else {
    // otherwise loop through arr backwards then using unshift input each index while num > 0
    for(let i = arr.length - 1; i >= 0; i--) {
        if(num > 0) {
            output.unshift(arr[i]);
            num--;
        }

    }
    }
    return output;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, value){
    //for loop through arr, test each index === value, return value when found,  return -1 outside loop if value is not found
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value){
    // using ternary operator test if arr includes value, return true or false
    if(value === undefined) {
        return false;
    }
    return arr.includes(value) ? true : false;   
}

console.log()
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action){
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr){
    // create variable to hold output
    var output = [];
    // loop through arr, test if output includes arr[i], if not push array value to output
    for(let i = 0; i < arr.length; i++) {
        if(!output.includes(arr[i])) {
            output.push(arr[i])
        }
    }
    return output;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(arr, action){
   // create output array
   var output = [];
   // loop through arr, test calling action on arr passing parameters arr[i], i, arr,
   for(let i = 0; i < arr.length; i++) { 
   //if true push to output arr
    if(action(arr[i], i, arr)) {
        output.push(arr[i])
    }
   }
   //return output
   return output;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, action){
    // copy exact same code for filter but add a bang operator in the conditional statement
     // create output array
   var output = [];
   // loop through arr, test calling action on arr passing parameters arr[i], i, arr,
   for(let i = 0; i < arr.length; i++) { 
   //if true push to output arr
    if(!action(arr[i], i, arr)) {
        output.push(arr[i])
    }
   }
   //return output
   return output;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, action){
    // create an output array with two nested arrays inside
    var output = [[],[]]
    // loop through array, test arr by calling action(arr[i], i, arr)
    for(let i = 0; i < arr.length; i++) {
    //if true push arr[i] into output[0]
    //if not push arr[i] into output[1]
        if(action(arr[i], i, arr)) {
            output[0].push(arr[i])
        } else {
            output[1].push(arr[i])
        }
    }
    // return output;
    return output;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collect, action){
    // output array
    var output = [];
    // test collection for array or object
    if(Array.isArray(collect)) {
    // push the result of calling action on collection to output
        for(let i = 0; i < collect.length; i++) {
            output.push(action(collect[i], i, collect))
        }
    } else if(collect instanceof Object) {
        for(var key in collect) {
            output.push(action(collect[key], key, collect))
        }
    }
    // return output
    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop){
    //output array
    var output = [];
    //loop through arr, push the value of prop to output for each iteration through array
    for(let i = 0; i < arr.length; i++) {
        output.push(arr[i][prop])
    } 
    return output;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collect, action){
    //create variable to hold true output
    var output = true;
    // determine if collect is an array or object, loop through collect testing action on collect, if test results in false return false, else return output
    // determine if action is not a function, if not then determine each iteration if collect is truthy/falsy
    if(Array.isArray(collect)) {
        for(let i = 0; i < collect.length; i++) {if(!action){
            if(!collect[i]){
                return false;
            }
        } else if(!action(collect[i], i, collect)){
            return false;
        }
    }
    } else if(collect instanceof Object) {
     for(let key in collect){
        if(!action){
           if(!collect[key]){
            return false;
           }
       } else if(!action(collect[key], key, collect)){
        return false;
       }
    }
}
    return output;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collect, action){
    //determine if collect is an array or object, loop through collect calling action to test each iteration, 1st true result return true; else return false outside loops
    if(Array.isArray(collect)) {
        for(let i = 0; i < collect.length; i++){
            if(!action){
                if(collect[i]){
                    return true;
                }
            } else if(action(collect[i], i, collect)){
                return true;
            }
        }
    } else if(collect instanceof Object){
        for(let key in collect){
        if(!action){
            if(collect[key]){
                return true;
            }
        } else if(action(collect[key], key, collect)){
                return true;
            }
        }
    }
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
