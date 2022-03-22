/**
 * VARIABLES
 * 
 * 0. variables are named identifiers that allow us to store values in our code for later  
 * access through the life-cycle of a program. Think of a variable like a container that can 
 * store simple data types such as numbers, strings, and boolean values, as well as point to a  
 * location where complex data types such as objects and arrays are stored. Variables can also
 * be chagned through re-assignment and complex data can be accessed using their variables as 
 * well.
 * 1. There's two steps to assigning a variable, the first being declaration using either var,
 * let, or const keywords followed by the variable name and a semicolon. The second step is 
 * initializing, or assigning the variable by inputting the variable name then the assignment
 *  operator "=" followed by the data intended to store.
 * 2. Up until ES5 the var keyword was the only method for assigning variables, then ES6 
 * introduced the let and const keywords. While var, let, and const, are all used for storing 
 * variables, there are differences in how they operate. 
 * 3. Variables using the var keyword for example are hoisted, this means that the variable is 
 * stored in the global scope. Let and Const variables are not hoisted, being confined in the 
 * scope they are initialized in.
 */

//1. DECLARATION //
/* In the declaration phase, we declare our variable by using the var keyword followed by our
variable name.
*/

var myAge;
console.log(myAge) // prints undefined to the console


//2. Initialization //
/* Then to assign our variable to a value we start with our variable name, and join it to a value 
joined by our assignment operator.
*/

myAge = 27;
console.log(myAge) // prints 27 to the console

//3. Re-assignment //
/* We can re-assign our variable above since it was declared using the var keyword. In order to 
re-assign the variable, we repeat the steps in the initialization phase with our updated value
*/

myAge = 28;
console.log(myAge) // now prints 28 to the console

//4. Let keyword //
/* While let and var can both be re-assigned, let is confined to local scope and is not hoisted in any way. 
This means that when let is used to initialize a variable, that variable cannot be accessed before its 
initialization or outside of the scope that it was defined in.
*/

console.log(canDrive) // prints error cannot access canDrive before initialization
let canDrive = "yes";
console.log(canDrive) // prints yes

//5. Const keyword //
/* The const keyword is also confined to its local scope like the let keyword but cannot be reassigned.
*/

const myNumber = 2
console.log(myNumber) // prints 2
myNumber = 4
console.log(myNumber) // prints error assignment to constant variable

//6. Hoisted //
/* Variables assigned using the var keyword are "hoisted" to the top, meaning that it is possible to see 
if a variable was declared before it is declared in the code of a program. However it is not possible to 
check what a variable is assigned to before its initialization.
*/

console.log(isDeclared) // prints undefined instead of an error message
var isDeclared = "Yes"
console.log(isDeclared) // prints yes