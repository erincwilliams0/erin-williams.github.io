/**
 * LOOPS:
 * 0. Loops offer a simple way to repeatedly execute code for a desired result and affect the 
 control flow of the code. There are multiple types of that loops fundamentally do the same 
 thing, but have different conditions to meet. 
 * 1. While loops contains a condition holding an expression and will continue to run until 
 the condition results to a falsy value. When using a while loop the code block needs to 
 contain instructions to modify the expression used in the condition or else an infinite loop 
 may occur.
 * 2. For loops begins with the "for" keyword and in parentheses contain smultiple expressions used
 as a starting point, a condition that indicates when to end the loop, and a increment expression
 that modifies the expression evaluated in the condition. It is imperative to pay close attention
 to the condition and increment expressions, if the incrementer moves the expression in a way where 
 the condition will never be met that an infinite loop can cause your code to crash.
 * 3. For loops provide a straight forward method to looping over an array. In to accomplish a loop
 over an array with for, you simply must specify in either the initial expression or condition that 
 you are using the length of an array to loop over.
 * 4. For in loops are used with objects and work somewhat differently than other loops. Instead of 
 having to input a condition to stop the loop, a for in loop will repeat for every property stored 
 in an object.
 */

// WHILE LOOP //
/* consist of the keyword "while" followed by a condition and a code block to be executed.
When using while loops the code block must contain instructions to modify the expression
that is being evaluated in the condition or else an infinite loop may occur.
*/

var num = 10
while(num >= 0){
    console.log(num);
    num--
}
// => prints backwards 10 through 0

// FOR LOOP //
/* Starts with the keyword "for" followed by parenthesis consisting of an initial expression,
a conditional expression, and an increment expression and ends with a statement or code block.
*/

var array = ['a', 'b', 'c', 'd', 'e', 'f']
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
// loops forwards through array and prints a through f

for(let i = array.length; i >= 0; i--){
    console.log(array[i])
}
// loops backwards through array and prints f through a

// FOR IN-LOOP //
/*  Since objects are an unordered list there is a type of loop called the for in loop that
that repeats instructions for every property contained in an object.
*/

var colors = {
    sky: "blue",
    leaf: "green",
    apple: "red"
}
for(let key in colors){
    console.log(`The ${key} is ${colors[key]}`);
}
/* => prints the sky is blue
             the leaf is green
             the apple is red
*/