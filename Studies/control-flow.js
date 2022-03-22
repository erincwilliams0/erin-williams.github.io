/**
 * CONTROL-FLOW
 * 
 * 
 */

// If //
/* Starts with the keyword if then test a condition that evaluates to true or false followed by a code block to run
if the condition evaluates to true. When an if statement evaluates to false and there are no following conditionals 
nothing is executed and the program moves on the the next line
*/

var hungry = false;
if(hungry === true){
    console.log("Go eat")
}
// Because hungry evaluates to false the code block is not executed.

// ELSE-IF //
/* A new condition to test for truthiness when an if statement evaluates to false
*/

var time = "Night"
var tired = "false"
if(tired === true){
    console.log("Have a rest")
} else if(time === "Night"){
    console.log("Go to bed")
}
// => prints "Go to bed"

// ELSE //
/* When if/else-if statements evaluate to false and an else statement is present, the code
block following the else statement is executed.
*/

time = "Day"
if(tired === true){
    console.log("Have a rest")
} else if(time === "Night"){
    console.log("Go to bed")
} else {
    console.log("Get to coding")
}
// => prints Get to coding

// SWITCH //
/* A statement that evaluates an expression for a match in a number of cases. When a switch statement
finds a matching case, it executes code until a break statement is reached. A default case can be used 
when no matching cases are found similarly to an else statement. 
*/

var 