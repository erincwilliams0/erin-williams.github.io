// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// store output object in variable
let contact = {};
    //using dot notation make key/value pairs for id, nameFirst, and nameLast
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;
    // return output object
    return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // for addContact: create a function that takes in an obj parameter and pushes it into the contacts array
        addContact: function(contact) {
            contacts.push(contact);
        },
        //findContact: create a function that takes a fullname as its parameter
        findContact: function(fullName) {
            //create an array of the first and last name of fullName using .split method
            var name = fullName.split(" ");
            // use a for loop to loop through contacts array
            for(let i = 0; i < contacts.length; i++) {
            //for each iteration test if 0 index of name strictly equals nameFirst, and if 1 index equals nameLast
            if(name[0] === contacts[i].nameFirst && name[1] === contacts[i].nameLast) {
                return contacts[i];
            }    
            }
        },
        //removeContact: create a function that takes a contact object as a parameter
        removeContact: function(contact) {
            // loop through contacts array
            for(let i = 0; i < contacts.length; i++) {
            // use an if statement to test for a matching object in our contacts array
            if(contact === contacts[i]) {
            // remove object
                contacts.splice(i, 1)
            }
            }
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
