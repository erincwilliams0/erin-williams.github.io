/**
 * STRING-MANIPULATION:
 * 0. There are a number of operators and methods that manipulate strings.
 * 1. Operators such as the concatenation operator help build up strings by combining 
 strings, also the typeof and instanceof operators used to return data types 
 can be used on strings.
 * 2. Methods when used with strings can transform them, return portions of strings, 
 and locate the index at which a substring occurs in a string. The method 
 toUpperCase/toLowerCase can be used to transform strings, and are useful when
 needed to make code case insensitive. Slice can return a portion of a string 
 taking in two arguments refering to indexes of the specified string. The
 indexof method takes in a substring and returns the index of the its first occurence 
 in a string. The charAt method takes in an index and will return the character located
 at the said index in the string.
 * 
 */

//  OPERATORS //
/* The concatenation operators + and += work with strings. These operators concatenate or join two 
different strings together or even a string and a number. Typeof is an unary operator that evaluates
a value and returns a string of the values data type, and can be used on strings.

*/

var smsg = "let's go"
msg += " to the store"
console.log(msg); // => prints "let's go to the store"
var steakSauce = "A" + 1;
console.log(steakSauce); // => prints A1 
console.log(typeof steakSauce); // => prints string

// length //
/* The length property will return the length of a string.
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