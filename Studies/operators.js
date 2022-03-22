/**
 * OPERATORS:
 * 
 * 0. Operators allow us to act on our data and have a number of different functions in our 
 * code. The assignment operator "=" for example, allows us to assign values to variables.
 * Arithmetic operators allow us to perform math equations in our code, and comparison
 * operators compare a number of values and result in a true or false statement.
 * 1. Operators can be classed based on the number of values or operands they operate on.
 * A unary operator operates on one operand, binary on two operands, and there is a ternary  
 * operator called the conditional operator that works on three operands. 
 * 
 */



// 1. Assignment Operators //
/* All assignment operators are binary operators that take the value of its right operand and 
stores it in its left operand.
*/

var myAge = 27;
console.log(myAge) // prints 27 to the console
myAge += 2; // addition assignment operator
console.log(myAge) // prints 29 to the console

// 2. Arithmetic Operators //
/* Arithmetic operators work on numbers for its operands and return a single numerical value.
Parenthesis can be used to help with the order of operations in our code as well.
*/

var math = (10 * 2) / 4;
console.log(math) // prints 5 to the console

// 3. Comparison Operators //
/* Comparison operators compare its operands and return a Boolean value based on its truthiness.

*/

console.log(32 > 2) // prints true
console.log("Cat" === "cat") // prints false

// 4. Logical Operators //
/* Logical operators generally work with Boolean values. The Logical And operator "&&" test to 
see if all its operands return true. The Logical Or operator "||" test to see if any of its
operands result in true or false. Lastly the Logical Not or Band operator "!" is used to return 
the opposite result in truthiness.
*/

console.log(true && false) // returns false
console.log(true || false) // returns true
console.log(!true) // returns false

// 5. Unary Operators //
/* Unary operators only work with one operand, such as the Bang operator "!". The typeof operator 
takes one operand and returns that operands data type. In addition there is the negation operator 
"-" which negates the value of an operand.
*/

var myNum = 7;
console.log(typeof myNum) // returns number
console.log(-myNum) // prints -7

// 6. Ternary Operator //
/* The Conditional operator is the only ternary operator in javascript as of ES6. This operator is 
used as a more elegant alternative to the if ... else statements. A Conditional operator starts with a 
condition followed by a question mark, then comes a truthy and falsy expressions to execute seperated by a colon.
*/

console.log(27 > 25 ? "true" : "false") // prints true