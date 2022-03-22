/**
 * FUNCTIONS:
 * 0. Using functions can be broken down into two steps, defining and executing a function.
 Defining consist of declaring what inputs your function will take as well as the instructions
 the function will carry out. Executing or calling/invoking a function is done by inputting 
 the function name followed by parenthesis containging any arguments to be passed to the function.
 * 1. Parameters are named place holders enclosed in parenthesis after the function name, arguments
 are the actual values passed in during a function call.
 * 2. All function declarations or function statements are considered named functions. Defining a 
 name function consists of the function keyword followed by a name and parenthesis enclosing 
 parameters, and ending with a code block containing the instructions to carry out during 
 execution.
 * 3. Another method to defining functions are function expressions. The main difference between
 function declaration and function expressions is the function name can be omitted in the latter. 
 Unlike function declarations, function expressions are not hoisted. Function expressions are generally
 assigned to a varaible, however an IIFE(Immediately Invoked Function Expression) is called as soon as 
 it is defined and is considered a function expression.
 * 4. Functions have access to the scope that they are defined in, as well as any parent scopes. 
 When defined in the global scope the function has access to all variable declared in the global scope.
 A nested function has access to all variables in the parent and global scope, however variables declared
 in a nested function cannot be accessed in its parent scope or the global scope.
 * 5. Any time a function is defined it forms a closure. When a function is defined in the scope of a parent 
 function it has access to all the variable declared in the parent scope. Closure can retain access to an outer 
 functions variables even after invoking the function.
 */

// DEFINING AND EXECUTION //
/* Functions are used in two phases, defining a function and executing a function. 
In order to define a function  you must first input the "function" keyword followed by
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
arguments. An immediately invoked function expression is wrapped in parenthesis and is called immediately.
*/

var express = function() {
    console.log("This variable holds a function")
}// assigns the variable express to an anonymous function
(() => {
    console.log("This function is called immediately")
})(); // an arrow function that is immediately called after definition.

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