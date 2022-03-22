/**
 * OPERATORS:
 * 
 * 0. Operators allow us to act on data and have a number of different functions in our 
 * code. The assignment operator "=" for example, allows us to assign values to variables.
 * Arithmetic operators allow us to calculate mathmatical expressions in our code, and 
 * comparison operators compare a number of values and result in a true or false statement.
 * 1. Operators types are based on what actions they perform and the number of operands they
 * act on. Unary and binary operators respectively take in one and two operators and there
 * is a single ternary operator that acts on three operands and may be used in place of an
 *  if else statement. 
 * 2. Assignment, arithmetic, comparison, and logical operators are types based on the actions
 * these perform and include unary and binary operators. 
 */



// 1. Assignment Operators //
/* All assignment operators are binary operators that take the value of the right operand and 
stores it in the left operand.
*/

var myAge = 27;
console.log(myAge) // prints 27 to the console
myAge += 2; // addition assignment operator
console.log(myAge) // prints 29 to the console

// 2. Arithmetic Operators //
/* Arithmetic operators take in numbers as operands and return a single numerical value.
Parenthesis can be used to help with the order of operations in code as well.
*/

var math = (10 * 2) / 4;
console.log(math) // prints 5 to the console

// 3. Comparison Operators //
/* Comparison operators compare two operands and return a Boolean value based on its truthiness.

*/

console.log(32 > 2) // prints true
console.log("Cat" === "cat") // prints false

// 4. Logical Operators //
/* Logical operators generally work with Boolean values. The Logical And operator "&&" returns 
true only when both operands evaluate to true. The Logical Or operator "||" will return true if one of 
the operands evaluate to true. Lastly the Logical Not or Bang operator "!" is used to return 
the opposite result in truthiness.
*/

console.log(true && false) // returns false
console.log(true || false) // returns true
console.log(!true) // returns false

// 5. Unary Operators //
/* Unary operators only work with one operand, such as the Bang operator "!". The typeof operator 
takes one operand and returns a string representing the operands data type. In addition there is 
the negation operator "-" which negates the value of an operand.
*/

var myNum = 7;
console.log(typeof myNum) // returns number
console.log(-myNum) // prints -7

// 6. Ternary Operator //
/* The Conditional operator is the only ternary operator in javascript as of ES6. This operator is 
used as a more elegant alternative to an if ... else statements. A Conditional operator starts with a 
condition followed by a question mark, ending in a truthy and falsy expression to execute seperated by a colon.
*/

console.log(27 > 25 ? "true" : "false") // prints true