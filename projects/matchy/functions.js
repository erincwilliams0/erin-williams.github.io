/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function search(animals, name) {
    var output = null;
    // for loop through animals array
     for(let i = 0; i < animals.length; i++) {
        // using if/ else statement test if name parameter matches animals[i].name
        if(name === animals[i].name) {
            // return animals[i] object if found
            return animals[i];
        }
        
     }
     return output;
 }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //for loop through animals array
    for(let i = 0; i < animals.length; i++) {
        // using if statement test name parameter to === animals[i].name
        if(name === animals[i].name) {
        //if true animals[i] = replacement
        animals[i] = replacement;
        }
    }
        
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //for loop through animals array
    for(let i = 0;i < animals.length; i++) {
        //using if; test name === animals[i].name
        if(name === animals[i].name) {
        // true; remove index with splice method
        animals.splice([i], 1)
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
   var test = false;
   for(let i = 0; i < animals.length; i++) {
       if(animals[i].name === animal.name) {
           test = true;
       }
   }
   if(test === false && animal.name.length > 0 && animal.species.length > 0) {
       animals.push(animal)
   }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
