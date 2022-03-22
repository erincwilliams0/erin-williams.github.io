/**
 * LOOPS:
 * 
 * 
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