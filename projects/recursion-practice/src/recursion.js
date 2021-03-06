// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base
  if(n < 0){
    return null;
  }
  if(n < 1){
    return 1;
  }
  //recursion
  return n * factorial(--n)
}; 

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base
    //if array length is 0 return 0
    if(!array.length){
      return 0;
    }
  //recursive
    //return the zero element of array, then call the function slicing off the first element
    return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //base
  if(!array.length){
    return 0;
  }
  //recursive
    //check every index for nested array or length, if yes return zero index and slice index of nested array in function call
    //if not nested array call return element and call function like sum function
    if(!array[0].length){
      return array[0] + arraySum(array.slice(1))
    } else {
      return array[0][0] + arraySum(array[0].slice(1))
    }
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base
    // if num is 0 return true if num is 1 or -1 return false
    if(n === 0){
      return true;
    } else if(n === 1|| n === -1){
      return false;
    }
  //recursive
   if(n > 0){
     return isEven(n - 2)
   } else if(n < 0){
     return isEven(n + 2)
   }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base
  if(n === 0){
    return 0;
  }
  //recursive
  if(n > 0){
    return (n - 1) + sumBelow(n - 1)
  } else {
    return (n + 1) + sumBelow(n + 1)
  }
};



// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  //base
  if(x === y){
    return output
  }
  //recursive
    // if x < y increment x and push it to output array; if x > y decrement x and push it to output array
    if(x < y){
      if((x + 1) !== y){
        output.push(x + 1)
      }
      return range(x + 1, y, output)
    } else if(x > y){
      if((x - 1) !== y){
        output.push(x - 1);
      }
      return range(x - 1, y, output)
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //edge
  if(exp === 0){
    return 1;
  }
  //base
  if(exp === 1){
    return base;
  } else if(exp === -1){
    return 1 / base;
  }
  //recursive
  if(exp > 1){
    return base * exponent(base, exp - 1)
  } else if(exp < 0){
    return 1 / exponent(base, -exp)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if(n === 1){
    return true;
  }else if(n > 0 && n < 1 || n === 0){
    return false;
  }
  //recursive
  div = n / 2
  return powerOfTwo(div)
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // console.log(string.slice(0, string.length -1))
  //base
  if(string.length === 1) {
    return string[0];
  }
  //recursion
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/\s+/g, "")
  //base
    if(string.length === 1){
      return true;
    }  else if(string.length === 2){
      return string[0].toLowerCase() === string[1].toLowerCase();
    }
  //recursive
    // put in if statement to take out spaces; maybe set a variable to the string to use for comparison?
    
    if(string[0].toLowerCase() === string[string.length - 1].toLowerCase()){
      return palindrome(string.slice(1, -1))
    } else {
      return false;
    }
    
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  
  if(y === 0 || x === 0){
    return 0;
  }
 if(y > 0){
    return x + multiply(x, y - 1)
  } else if(y < 0){
    return -x + multiply(x, y + 1)
  } 
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    // return false if string lengths do not match
    
  //base
  if(!str1.length && !str2.length){
    return true;
  }
    //compare zero indexes when length is 1 for both strings
    if(str1.length === 1 && str2.length === 1){
      return str1[0] === str2[0];
    }
  //recursive
    // compare zero indexes to see if they match; return false if not; if true call function on strings with 0 indexes sliced off
    if(str1[0] === str2[0]){
      return compareStr(str1.slice(1), str2.slice(1))
    } else{
      return false;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){
  //base
    // when str is an empty string return output
  if(!str.length){
    return output;
  }
  //recursive
    // push zero index of string to output; then call function with the zero index removed
    output.push(str[0]);
    return createArray(str.slice(1), output)
};

// 17. Reverse the order of an array
var reverseArr = function (array, output=[]) {
  //base
    // if array is an empty array return output;
    if(!array.length){
      return output;
    }
  //recursive
    // push last element in array into output; call function with array[0] removed
    output.push(array[array.length - 1]);
    return reverseArr(array.slice(0, -1), output)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) {
  //base
    // if length is 0 return output
    if(length < 1){
      return output;
    }
  //recursive
    // push value into output array; call function decrementing length
    output.push(value);
    return buildList(value, length - 1, output)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
  //base
    //if array is an empty array return count
    if(!array.length){
      return count;
    }
  //recursive
    //check if first element in array matches value; if true increment count; call function removing array[0]
    if(array[0] === value){
      count++
    }
    return countOccurrence(array.slice(1), value, count)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  //base
    // if array is an empty array return output
    if(!array.length){
      return output;
    }
  //recursive
    //push the value of calling the callback function of array[0] into output array; call function removing array[0]
    output.push(callback(array[0]));
    return rMap(array.slice(1), callback, output)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, output=[0, 1]) {
  //edge
  if(n < 0){
    return null;
  }
  //base
  if(n === 0){
    return output[0]
  }
  //recursive
    //push the result of adding the first 2 elements in the output array; call function decrementing n and removing the first element of the output array
    output.push(output[0] + output[1]);
    return nthFibo(n - 1, output.slice(1))
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  //base
    // if input is an empty array return output
    if(!input.length){
      return output;
    }
  //recursive
    // push first element of input array to output array capitalized; call function with first element of input removed
    output.push(input[0].toUpperCase());
    return capitalizeWords(input.slice(1), output)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  //base
    //if array is an empty array return output
    if(!array.length){
      return output;
    }
  //recursive
    //push the first element of array into output with first character capitalized; call function with first element of array removed
    output.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    return capitalizeFirst(array.slice(1), output)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  //base
    // if str is an empty string return obj
    if(!str.length){
      return obj;
    }
  //recursive
    //check if obj[str[0]] exist; if it doesnt assign it a value of 1, else increment the value; call the function removing the first element of str
    if(obj[str[0]]){
      obj[str[0]] += 1
    } else{
      obj[str[0]] = 1
    }
    
    return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]) {
  //base
    //if list is an empty array return output
    if(!list.length){
      return output;
    }
  //recursive
    // test if the zero index of list is equal to the zero index of output array, if not push value into output; call function removing list[0]
    if(!output.length || list[0] !== output[output.length - 1]){
      output.push(list[0]);
      return compress(list.slice(1), output)
    } else if(list[0] === output[output.length - 1]){
      return compress(list.slice(1), output)
    }
    
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output=[]) {
  //base
    // if array is an empty array, return output
    if(!array.length){
      return output;
    }
  //recursive
    //test if both the zero index of array, and last index of output is equal to zero; if not push array[0] to output; call function removing array[0]
    if(array[0] === 0 && output[output.length - 1] === 0){
      return minimizeZeroes(array.slice(1), output)
    } else{
      output.push(array[0]);
      return minimizeZeroes(array.slice(1), output)
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[]) {
  //base
  if(!array.length){
    return output;
  }
  //recursive
    // if output is empty and array[0] > 0, push zero index to output; else if array[0] < 0, push to output with sign flipped
    if(!output.length){
      if(array[0] > 0){
        output.push(array[0]);
        return alternateSign(array.slice(1), output)
      } else if(array[0] < 0){
        output.push(-array[0]);
        return alternateSign(array.slice(1), output)
      }
    } else if(output[output.length - 1] > 0){
      if(array[0] < 0){
        output.push(array[0]);
        return alternateSign(array.slice(1), output)
      } else if(array[0] > 0){
        output.push(-array[0]);
        return alternateSign(array.slice(1), output)
      }
  } else if(output[output.length - 1] < 0){
    if(array[0] > 0){
      output.push(array[0]);
        return alternateSign(array.slice(1), output)
    } else if(array[0] < 0){
      output.push(-array[0]);
        return alternateSign(array.slice(1), output)
    }
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output=[]) {
  //base
  if(!str.length){
    console.log(output)
    return output.join(" ")
  }
  //recursive
  output.push(str.split(" ")[0]);
  if(output[output.length - 1] === "1"){
    output[output.length - 1] = "one"
  } else if(output[output.length - 1] === "2"){
    output[output.length - 1] = "two" 
  } else if(output[output.length - 1] === "3"){
    output[output.length - 1] = "three"
  } else if(output[output.length - 1] === "4"){
    output[output.length - 1] = "four"
  } else if(output[output.length - 1] === "5"){
    output[output.length - 1] = "five"
  } else if(output[output.length - 1] === "6"){
    output[output.length - 1] = "six"
  } else if(output[output.length - 1] === "7"){
    output[output.length - 1] = "seven"
  } else if(output[output.length - 1] === "8"){
    output[output.length - 1] = "eight"
  }else if(output[output.length - 1] === "9"){
    output[output.length - 1] = "nine"
  }
  
  return numToText(str.split(" ").slice(1).join(" "), output)
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
