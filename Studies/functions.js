/**
 * FUNCTIONS:
 * 
 * 
 */

// DEFINING AND EXECUTION //
/* Functions are used in two phases, defining a function and executing a function. 
In order to define a function  you must first input the "function" keywor followed by
parenthesis, then ending with a function statement or code block wrapped in curly 
brackets. Executing a function, also known as calling or invoking a function involves
inputting the function name followed by parenthesis.
*/

function print1() {
    console.log(1)
}
// => defines a function that prints the number 1 when called
print1(); // => calls, executes, or invokes the function => prints 1

// PARAMETERS VS ARGUMENTS //
/* During function declaration parameters are stored in the parenthesis following the
function name. Parameters are named place holders indicating inputs that our function may
operate on. When invoking a function, arguments are placed in parenthesis after the
function name. 
*/

function sum(x, y){
    return x + y
} // => x and y are considered parameters
sum(3, 2); // => 3, 2 are arguments passed to the function sum

// FUNCTION DECLARATION //
/* All function declarations are named functions. A named function starts off with the "function"
key word, followed by parentheses holding any parameters used in the function then ends with the 
code block or set of instructions to carry out when the function is called.
*/

function declare() {
    console.log("This is a named function")
}
// => a function declaration must be a named function

// FUNCTION EXPRESSIONS //
/* There are anonymous functions created by function expression. A function expression can refer to 
a function that is stored in a variable. Anonymous functions can be passed into other functions as
arguments or even returned from functions.
*/

var express = function() {
    console.log("This variable holds a function")
}// assigns the variable express to an anonymous function

// SCOPE //
/* Scope refers to the location in code where variables are accessible. There is global scope and 
there is local/blocked scope. A variable created in the context of a functions code block can only
be accessed in that functions scope.
*/

var num = 2
function doSomething() {
    num += 4;
    var string = "This string is scoped to the function block"
    return num;
}
doSomething();
console.log(num); // => prints 6 to the console
console.log(string); // => throws error string is not defined

// CLOSURES //
/* 
*/

var makeName = function() {
    var name = "Erin Williams";
    var printName = () => {
        console.log(name)
    }
    return printName;
}

var getName = makeName();
console.log(getName()); // => prints Erin Williams