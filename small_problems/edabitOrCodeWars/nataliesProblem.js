// Create the function `type` which takes the argument `val` and returns val's type as a string. If possible, `type` should return additional information. For example 1 should return 'Number Integer'.


/*
Problem: Create a function `type` that takes argument `val` and returns `val`'s type as of a string.  

rules/requirements:
1) If possible, `type` should return additional, more specific, relevant information.

input: One argument (ideally) of any data type
intermediate data structures:

array: Array.isArray
null: null !== null
functions: to identify functions: use `constructor.name` to check that it equals 'Function'
date: to identify dates, use `constructor.name` to check that it equals 'Date'
RegEx: to identify reg ex, use `constructor.name` to check that it equals 'RegExp'

undefined: use typeof operator

NaN: use `isNaN`

Infinity: !Number.isFinite(Infinity) && typeof(Infinity)

Neg Infinity same as above

null: typeof(null) === `object` and argument === null

string: typeof


empty string: same as above

number: typeof
  -integer: Number.isInteger

no argument: undefined

boolean: typeof



at the very end, string[0].toUpperCase + string.slice(1)
output: a string indicating very specifically the data type.

questions:
1) If `val` is an array, do you want the output ("Array")
2) If `val` is a `function () {}`, what do you want output?  ("Function")
3) If `val` is a date object, what do you want output? ("Date")
4) if `val` is a reg ex object, what do you expect? ("RegExp")
5) If `val` is `undefined`, what do you want output? ("Undefined")
6) If 'val' is `NaN` what do you want ("Number NaN")
7) If it's Infinity, she wants ("Number Infinite")
8) If it's negative innfinity, she wants ("Number Infinite")
9) If it's null, return ("Null")
10) If it's null, return ("String")
11) If it's a number, return ("Number Integer")
12) If it's a negative integer, return ("Number Integer")
13) Zero should be ("Number Integer")
14) Empty string should be ("String")
15) No arugment passed in ("Undefined")
16) Too many arguments (Ignore extras, just deal with first)
17) If it's an object, ("Object")
18) Boolean ("Boolean")

Examples/test cases:

console.log(type([])) === "Array"
console.log(type(function () {})) === "Function"
console.log(type(new Date)) === "Date"
console.log(type(/b/)) === "RegExp"
console.log(type(undefined)) === "Undefined"
console.log(type(NaN)) === "Number NaN"

console.log(type(Infinity)) === "Number Infinite"
console.log(type(-Infinity)) === "Number Infinite"
console.log(type(null)) === "Null"
console.log(type('hello')) === 'String'
console.log(type(9)) === "Number Integer"

console.log(type(0.5)) === "Number"
console.log(type(-5)) === "Number Integer"
console.log(type(0)) === "Number Integer"
console.log(type('')) === "String"
console.log(type('hello', 1, 2, 3)) === 'String'

console.log(type({})) === "Object"
console.log(type(false)) === "Boolean"



Data structures:
Input: any data type
output: string

Algorithm:
Declare function `type` taking parameter `val`

 no argument: undefined
    -Return "Undefined"

  one line checking array with Array.isArray
    -Return "Array"
  
  write one line evaluating for and typeof(null) === object && null == null
    -Return "Null"
    
  functions: to identify functions: use `constructor.name` to check that it equals 'Function` THEN return "Function
  "
  date: to identify dates, use `constructor.name` to check that it equals 'Date'
    -THEN return "Date"

  RegEx: to identify reg ex, use `constructor.name` to check that it equals 'RegExp'
    -Then return "RegExp"

  undefined: use typeof operator
    -Then return "Undefined"

  NaN: use `isNaN` just note NaN !== NaN
    -Then Return "Number NaN"

  Infinity: !Number.isFinite(Infinity) && typeof(Infinity)
    -Then return "Number Infinite"

  Neg Infinity same as above

  null: typeof(null) === `object` and argument === null
    -Return "Null"

  string: typeof
    -Return "String"


  empty string: same as above

  number: typeof (arg) === "number" && -integer: Number.isInteger
    -Return "Number Integer"
  
  number typeof(arg) === "number" && !Number.isInteger(arg) 
    -Return "Number"

 
  boolean: typeof
    -Return "Boolean"
    
  object:  typeof arg === 'object'

*/

/*


  boolean: typeof
    -Return "Boolean"
*/

function type(val) {
  if (typeof val === 'undefined') return "Undefined"
  
  if (Array.isArray(val)) return "Array";
  
  if (typeof val === 'object' && val === null) return "Null"
  
  if (val.constructor.name === 'Function') return "Function"
  
  if (val.constructor.name === 'Date') return "Date"
  
  if (val.constructor.name === "RegExp") return "RegExp"
  
  if (val !== NaN && Number.isNaN(val)) return "Number NaN"
  
  if (!Number.isFinite(val) && typeof(val) === "number") return "Number Infinite"
  
  if (typeof val === 'string') return "String"
  
  if (typeof val === 'number' && Number.isInteger(val)) return "Number Integer"
  
  if (typeof val === 'number' && !Number.isInteger(val)) return "Number"
  
  if (typeof val === 'boolean') return "Boolean"
  
  if(typeof val === 'object') return "Object"
}

function type(arg) {
  if (arg === null) return 'Null';
  
  let type = typeof arg;
  let is;
  switch (type) {
    case 'undefined': 
    case 'boolean': 
    case 'function': 
      return type[0].toUpperCase() + type.slice(1);
    case 'number':
      is = 'Number';
      if (Number.isInteger(arg)) return is + ' Integer';
      if (Object.is(arg, NaN)) return is + ' NaN';
      if (!Number.isFinite(arg)) return is + ' Infinite';
      return is + ' Float';
    case 'string':
      is = 'String';
      if (!Object.is(Number(arg), NaN)) return is + ' Numeric'
      return is;
    case 'object':
      return arg.constructor.name;
  }
}

When there are numbers, parse out between decimals, integers, the non finite numbers

Strings - string numbers think about

be more broad when dealing with constructor functions

maybe null should be first

console.log(type([])) === "Array"
 console.log(type(function () {})) === "Function"
console.log(type(new Date)) === "Date"
console.log(type(/b/)) === "RegExp"
 console.log(type(undefined)) === "Undefined"
console.log(type(NaN)) === "Number NaN"

console.log(type(Infinity)) === "Number Infinite"
console.log(type(-Infinity)) === "Number Infinite"
console.log(type(null)) === "Null"
console.log(type('hello')) === 'String'
console.log(type(9)) === "Number Integer"

console.log(type(0.5)) === "Number"
console.log(type(-5)) === "Number Integer"
console.log(type(0)) === "Number Integer"
console.log(type('')) === "String"
console.log(type('hello', 1, 2, 3)) === 'String'

console.log(type({})) === "Object"
console.log(type(false)) === "Boolean"
console.log(type()) === "Undefined"

function Custom(){}//
console.log(type(new Custom()))// --> 'Custom'
// console.log(type(Console {}))

//I assumed the output of the float without asking.

// Am I understanding this correctly, "Number Float"
// Am I understading the problem missed "8" and you wanted output "String Number"
// 