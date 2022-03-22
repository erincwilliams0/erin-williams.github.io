/**
 * CONTROL-FLOW:
 * 0. Control flow refers to the order in which code is executed. The order in which code runs starts at the first
 line moving down until the last line.
 * 1. With conditional statments a programmer can control the order to which code is executed. If statements 
 indicated by the keyword "if" takes in a condition and a code block wrapped in curly brackets, but only runs
 the code if the condition results in a truthy value.
 * 2. In the event that an if statement results to a falsy value, an else if statement may be used to run a 
 different condition that executes its own instructions when resulting in a truthy value.
 * 3. Else statements may be used as a sort of default statement to execute in the case of the preceding if, 
 else if statements evaluating to a falsy value;
 * 4. In some circumstances a switch statement may be used to replace an if else-if else conditional chain.
 Switch statements evaluate an expression looking for any matching cases defined in its code block and may 
 take in a default case that works similarly to an else statement.
 *
 */

// If //
/* Starts with the keyword if then test a condition that evaluates to true or false followed by a code block to run
if the condition evaluates to true. When an if statement evaluates to false and there are no following conditionals 
no code block is executed and the program moves on the the next line
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

var craving = "sandwich"
switch(craving) {
    case "noodles":
        console.log("Ramen");
        break;
    case "sandwich":
        console.log("Poboys");
        break;
    case "Chinese":
        console.log("General Tso Chicken");
        break;
    default:
        console.log("Eggs")
}