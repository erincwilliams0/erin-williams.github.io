function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten() {

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop() {

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every() {

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
// remove spaces from input str
  let newStr = str.replace(" ", "");
  // create arrays for each direction
let ltr = [];
let rtl = [];
// iterate through input str
for (var i = 0; i < str.length; i++){
  let scriptName = characterScript(newStr.charCodeAt(i));
  console.log(scriptName);
  // check if the scriptName result is NOT EQUAL to null
  if (scriptName !== null) {
  scriptName.direction === "ltr" ? ltr.push(scriptName.name) : rtl.push(scriptName.name);
  }
}
if (ltr.length > rtl.length) {
  return "ltr";
} else {
  return "rtl";
}

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
