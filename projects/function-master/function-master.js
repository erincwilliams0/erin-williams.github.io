//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// create output array variable
var output = [];
// use a for in loop to iterate through object
for(var key in object) {
// for each iteration push object values to output
    output.push(object[key])
}
//return output
return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// create output array
let output = [];
    // for loop through object
    for(let key in object) {
    // push object key to output each iteration
    output.push(key);
    }
// return output.join(" ")
return output.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create output array
    let output = [];
        // for in loop through object
    for(let key in object) {
        // use if statement to check if values are strings
        if(typeof object[key] === "string") {
        // push object values to output
        output.push(object[key])
        }
    }
    //check
    //console.log(output.join(" "))
     return output.join(" ")
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // start if statement to test collection
    if(Array.isArray(collection)) {
        return "array"
    } else {
        return "object"
    }
    // if collection is an array return array
    //else return object
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return string with first letter capitalized
    return string.charAt(0).toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create output array
    var output = [];
    // create input variable and assign it to string.split(" ") to get an array
    let input = string.split(" ")
        // for loop through input array
    for(let i = 0; i < input.length; i++) {
        // each iteration push transformed word to output array
        output.push(input[i].charAt(0).toUpperCase() + input[i].slice(1))
    }
    //console.log(output)
    // return output.join(" ")
    return output.join(" ")

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// return a string with backticks Welcome object.name with name capitalized
return `Welcome ${object.name.charAt(0).toUpperCase() + object.name.slice(1)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// return a string with object.name is a object.species; both values must be capitalized
return `${object.name.charAt(0).toUpperCase() + object.name.slice(1)} is a ${object.species.charAt(0).toUpperCase() + object.species.slice(1)}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(object.hasOwnProperty('noises') && object.noises.length > 0) {
    return object.noises.join(" ")
} else {
    return "there are no noises"
}
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// create input array from string.split(" ")
let input = string.split(" ")
//create output variable to hold false return
var output = false;
// for loop through input array
for(let i = 0; i < input.length; i++) {
    // each iteration use if statement to test if word === input[i]
    if(input[i] === word) {
        return true;
    }
}
    //return appropriate boolean
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
 object.friends.push(name);
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// use includes method and if statement to test for objects friends array and see if it contains given name
if(object.friends && object.friends.includes(name)) {
    return true;
} else {
    return false;
}


}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// create output array
var nonfriends = [];
// loop through array
    for(let i = 0; i < array.length; i++) {
        // use if statement to find name's friends array and assign it to a variable
        if(array[i].name === name) {
            var friends = array[i].friends;
            //console.log(friends)
           
        }
    }
    // loop through array again, testing if friends includes array[i] name, if not push to nonfriends
    for(let i = 0; i < array.length; i++) {
        if(friends.includes(array[i].name) !== true && array[i].name !== name) {
            nonfriends.push(array[i].name)
        }
    }
   //console.log(nonfriends) 
   return nonfriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
     // for loop through array, test if object has a property of array[i]
    for(let i = 0; i < array.length; i++) {
        if(object.hasOwnProperty(array[i])) {
            delete object[array[i]]
        }
    }

return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}