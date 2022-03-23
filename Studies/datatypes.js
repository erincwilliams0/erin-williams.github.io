/**
 * DATA TYPES:
 * 
 * 0. Data types are categorized in two groups, primitive/simple data types and complex data types. 
 Primitive data types cannot be changed or modified after initialization and do no collect or store other values. 
 Complex data types are mutable and may collect or store many values making them of indefinite size.
 * 1. Primitive data types include but are not limited to numbers, strings, booleans, undefined, and null values.
 Numbers represent numeric values. Strings are sequences of characters used as text in code.  Booleans consist of 
 the values true and false. Undefined and null represent the absence of value, undefined being unintentional such
 as a variable that was initialized but has yet to be assigned. Null is an intentional absence of value and must 
 be inputted by the programmer.
 * 2. Complex data types are mutable and may collect and store a large number of values. Arrays, objects, and 
 functions are all complex data types. Arrays are a zero-based index and may be thought of as a list starting
 at zero and increasing with every value stored. Objects are an unordered list and values stored must be assigned to
 a unique key. Functions are a set of instructions that my take inputs and return a single output, functions must be 
 defined and then can be reused or invoked multiple times in a program.
 * 3. Infinity and -Infinity are data types that represent numbers to small or too large to store in code. 
 * 4. Primitive values are copy by value meaning that an exact copy of the specified value is stored in a variable.
 Complex values are indefinite of size and therefore are copy by reference, when assigning complex values to variables
 the program simply refers to a location in a program where the complex values are stored.
 */

// NUMBER //
/* Numbers take up to 8 bytes of memory and are the largest of the primitive data types. 
*/

var myNum = 123;


// STRING //
/* strings are made up of characters or symbols to represent text in code. 
*/

var myText = "What exactly am I trying to say here";


// BOOLEAN //
/* There are two boolean values true and false, both taking up exactly one byte of memory. Boolean values are useful for testing code 
multiple methods and functions rely on boolean values to carry out their instructions. For example the filter array method loops 
through an array testing each value for a condition that either results to true or false, all values resulting to true are made 
into a new array and returned.
*/

var positive = true;
console.log(typeof myNum === "number") // => true
console.log(27 < 17) // => false

// ARRAY //
/* Arrays are a complex data type that contain a number of values enclosed in brackets. Arrays are zero indexed meaning that the 
first element in an array starts with the index 0 and increases for each element stored into an array. Arrays can store nested arrays 
as well as objects and functions.
*/

var myArray = [1, "abc", [2, 3], {favoritecolor: "Red"}, function(a) {console.log(a)}]

// OBJECT //
/* Objects are a complex data type that can store a number of elements in an unordered list. Objects are stored in key/value pairs 
meaning each value must be assigned to its own unique string representing a key. Like arrays, an Object can store nested objects, 
arrays, and functions.
*/

var myObject = {
  number: 1,
  string: "abc",
  array: [2, 3],
  nest: {favoritecolor: "Red"},
  func: function(a) {console.log(a)}
};

// FUNCTION //
/* Functions are a reusable set of instructions that may take inputs, perform a task or calculation and may return some output. 
We use functions to avoid having rewriting code multiple times. Functions can take in values as parameters or arguments to act on, 
and may take in or return other functions.
*/

var myFunc = function(x, y) {
  return x + y;
};


// UNDEFINED //
/* Undefined represents an absence of value that is returned when no value is given or returned. 
If a variable is declared but not initialized it is given an intial value undefined. Functions that 
do not return some output in its instructions will return undefined.
*/

var noValue;
//console.log(noValue) // => undefined
var noOutput = function(x, y) {
  x + y;
};
//console.log(noOutput(1, 2)); // => returns undefined

// NULL //
/* Null represents a programmer providing an absence of value. While variables can be declared and the initial value 
is set to undefined, null will only be assigned when the programmer intends for a value to be null. This is useful when 
checking code to see if there was an unintentional absence of value vs intentional absence of value.
*/

var myUser = null;

// NAN //
/*  NaN stands for not a number. Functions or methods that are expected to act on numbers may return Nan when the result is not a number, 
likewise if a Math calculation is attempted on values other than numbers Nan may be returned.
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