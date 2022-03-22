/**
 * STRING-MANIPULATION
 * 
 * 
 */

// CONCATENATION OPERATOR //
/* The concatenation operators + and += work with strings. These operators concatenate or join two 
different strings together or even a string and a number.
*/

var smsg = "let's go"
msg += " to the store"
console.log(msg); // => prints "let's go to the store"
var steakSauce = "A" + 1;
console.log(steakSauce); // => prints A1 //note: when using concatenation on a string and a number a string is returned

// length //
/* The length method will return the length of a string.
*/

var str = "this is a string"
console.log(str.length); // => prints 16; this includes all the characters and the spaces in between

// toUpperCase/toLowerCase //
/* When you need to check to see if your code is case sensitive you can use the method toUpperCase or toLowerCase. 
These methods by themselves will return an entire string switched to the specified case.
*/

console.log(str.toUpperCase()); // => prints THIS IS A STRING

// charAt //
/* Strings are zero-based index like arrays in javascript. The method charAt returns the character located at the 
specified index in a string.
*/

console.log(str.charAt(str.length - 1)) // => prints g


// indexOf //
/* Will take in a substring as an argument to search for in a string and will return the index at which the first
match is located. An index can also be passed in as a position to start the search.
*/

console.log(str.indexOf("is", 3)); // => prints 5

// slice //
/* Takes up to two parameters representing a starting index and ending index, then returns a copy of the string
from the start and up to but not including the endind index.
*/

console.log(str.slice(0, 5)); // => prints this

// STRING MANIPULATION //
/* All the before mentioned methods and operators really become useful when used in conjunction with one another.
*/

var newstr = str.charAt(0).toUpperCase() + str.slice(1, 7) + " " + "string manipulation"
console.log(newstr); // => prints This is string manipulation