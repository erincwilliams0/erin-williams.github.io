/**
 * DATA TYPES:
 * 
 * 0. All of data types can be categorised into two groups, primitive/simple data types and complex data types. 
 * Primitive data types do not collect other values and are "immutable" meaning they cannot be changed after creation. Complex data types can 
 * hold and collect many values therefore are of an indefinite size.
 * 1. Primitive values include: numbers, strings, booleans, undefined, and nul values. Complex data types include objects, arrays, and functions.  
 * 
 * 
 */

// NUMBER //
/* Numbers take up to 8 bytes of memory making them the larges of the primitive data types. 
*/

var myNum = 123;


// STRING //
/* strings are made to represent text in our code. 
*/

var myText = "What exactly am I trying to say here";


// BOOLEAN //
/* There are two boolean values, true and false and both take up exactly one byte of memory. Boolean values are very useful for testing our code and 
many methods and functions rely on boolean values to carry out their instructions. For example the filter array method loops through an array testing each
value for a condition that either results to true or false, all values resulting to true are made into a new array and returned.
*/

var positive = true;
//console.log(typeof myNum === "number") // => true


// ARRAY //
/* Arrays are a complex data type and can contain any number of elements wrapped in brackets. Arrays are zero indexed meaning that the first element 
in an array starts with the index 0 and increases for each element stored into an array. Arrays can also store nested arrays as well as objects and functions.
*/

var myArray = [1, "abc", [2, 3], {favoritecolor: "Red"}, function(a) {console.log(a)}]

// OBJECT //
/* Objects are a complex data type that can store any number of elements in an unordered list. Objects are stored in key/value pairs meaning each value must 
be assigned to its own unique string representing a key. Like arrays, an Object can store any primitive data types along with nested objects, arrays, and functions.
*/

var myObject = {
  number: 1,
  string: "abc",
  array: [2, 3],
  nest: {favoritecolor: "Red"},
  func: function(a) {console.log(a)}
};

// FUNCTION //
/* Functions are a reusable set of instructions that performs a task or calculation and returns some output. We use functions so that we may avoid having to 
rewrite code multiple times. Functions can take in values as parameters or arguments to act on, this includes inputting or returning functions themselves.
*/

var myFunc = function(x, y) {
  return x + y;
};


// UNDEFINED //
/* Undefined represents an absence of value that is returned when no value is given or returned. If a variable is declared but not initialized it is given an 
intial value undefined. Functions that do not have a return output in its instructions will return undefined.
*/

var noValue;
//console.log(noValue) // => undefined
var noOutput = function(x, y) {
  x + y;
};
//console.log(noOutput(1, 2)); // => returns undefined

// NULL //
/* Null represents a programmer providing an absence of value. While variables can be declared and the initial value is set to undefined, null will only be 
assigned when the programmer intends for a value to be null. This can be useful when checking code to see if there was an unintentional absence of value 
vs intentional absence of value.
*/

var myUser = null;

// NAN //
/*  NaN stands for not a number. Functions or methods that are expected to act on numbers may return Nan when the result is not a number, likewise if a 
Math calculation is attempted on values other than numbers Nan may be returned.
*/

var isNan = 2 * "a";
//console.log(isNan); // => NaN
//console.log(0/0) // => NaN

// INFINITY/-INFINITY //
/* Positive infinity and negative infinity represent numbers too large or too small for javascript to represent otherwise.
*/

var isInfinity = 1/0 // => Infinity
var negative = -1/0 // => -Infinity

// PRIMITIVE VS COMPLEX //
/* Primitive data types are immutable meaning they cannot be changed or modified, if you perform an operation on a simple data type then another simple 
data type is returned. Complex data types are mutable, they can store multiple values so they are indefinite in size.
*/

var num = 3 // num assigned to number three a simple data type
num = num + 2 // now reassigned to the number 5

var array = ["abc", 1, 2 ,3]; // a complex data type array storing multiple values
array.push(4); // adds the number 4 to the end of the array variable
//console.log(array) // => prints ["abc", 1, 2, 3, 4]

// COPY BY VALUE VS REFERENCE //
/* Copy by value is used for primitive data types since they are definite in size, when you assign a primitive value in a variable it is storing an 
exact copy in the variable. When assigning complex data types to a variable our code simply refers to or points to the space in our code holding the 
complex data type since they are indefinite in size.
*/

var color = "red";
var favoriteColor = color; // => favoriteColor now holds value "red"
favoriteColor = "blue" 
//console.log(color) // => prints "red" since primitives are copy by value

var complexDT = array; // => variable points to array variable => ["abc", 1, 2, 3, 4];
complexDT.push(5); // => pushes 5 to the end of complexDT array;
console.log(array) // => prints ["abc", 1, 2, 3, 4, 5] since our array is copy by reference