// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./erin-williams.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === "male"
    })
    return males.length;
};

var femaleCount = function(array){
    var tally = _.reduce(array, function(count, object) {
        // check object.gender to see if it strictly equals female, if so increase tally
        if(object.gender === "female") {
            count++
        }
        return count;
    }, 0)
    return tally;
};


var oldestCustomer = function(arr){
    var old = _.reduce(arr, function(oldest, test){
        if(oldest.age > test.age) return oldest;
        return test;
    })
    return old.name;
};

var youngestCustomer = function(arr){
    var young = _.reduce(arr, function(youngest, test){
        if(youngest.age < test.age) return youngest;
        return test;
    })
        return young.name;
};

var averageBalance = function(arr){
    //parseFloat(arr[0].balance.replace("$", "").replace(",", ""))
    var totalsnum = _.map(arr, function(customer){
       return parseFloat(customer.balance.replace("$","").replace(",", ""));
    })
  var total = _.reduce(totalsnum, function(balance, curr){
      return balance + curr;
  })
  return total / totalsnum.length;
};


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
