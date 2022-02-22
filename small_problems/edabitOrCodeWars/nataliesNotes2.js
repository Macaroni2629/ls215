// list of possible things to go over:
// 1) Yoorhim's suggestion of problems 8-10 accessing objects but upping difficulty
// 2) Anna's problems that she has sent me over time; she said they're all generally harder than the test
// 3) Ainaa's suggestion of 139 cipher problem, rot 13 in 210, circular buffer
// 4) going over validation, especially word.constructor.name
// 5) ben's suggestion of going over easy problems but upping difficulty

// Inventory Item Transactions
// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

// Example
/*
1) Can we assume input the outer data type is an array for the second argument? (no)

console.log(transactionsFor());
2) the elements in the assumed array, can we assume all the elements inside are objects? (no)

3) Do I need to write code to ensure that the ONLY 3 properties are id, movement, and quantity?  Yes

4) Do I need to check that the first argument is a certain kind of number? (just has to be a rational number that's not NaN or Infinity)

5) Can I assume that the value of id will always be a positive integer?(no, validate)
6) Can I assume that the value of movement property is always a string with the words either "in" or "out"? (no, validate)
7) can I assume that the value of quantity property is always a positive integer? (no, validate)

Algorithm:

Declare function `transactionsFor` with parameter `transID, arrayOfTransactions`

  -Pass to helper function `isValidDataType` passing `arrayOfTransactions`
    -Return false if not
    
    
    
  -
  
  
-main validation function `isValidDataType` parameters `id`, `array`
  -pass to Array.isArray(arrayOfTransactions)
  
  - Pass to helper function `isInnerElementAnObject` passing arrayOfTransactions
      -make sure every element in the main array is an object
      -use callingobject.constructor.name 
      -if false, return false
      
  - Pass to helper function `doesEveryObjectHaveThreeProperties`, passing arrayofTransactions
    -if false, return false
    
    
  -
    
    
    
-Helper function `doesEveryObjectHaveThreeProperties`
  -let trueOrFalse = true
  -Iterate through arrayOfObjects
    -check that object.length === 3
      if it's not, reassign trueOrFalse to false
      
  -return trueOrFalse
     

-Helper function `isInnerElementAnObject`
  -Iterate through `arrayOfTransactions`, one object at a time.
  - Use `every` method object.constructor.name === "Object"
  -If false, return false
      
*/
// Rules it is an object
What type of object? 
  step 1 check null or undefined.. if not then proceed
  {} - {}.constructor.name (BUT check that it isn't null or undefined first!)
                          
//
function transactionsFor(itemID, arrayOfTransactions) {
  if (!isValidDataType(arrayOfTransactions)) return false;
  
  
}

function isInnerElementAnObject(arrayOfTransactions) {
  return arrayOfTransactions.every(transaction => {
    if (transaction === null || transaction === undefined) return false
    return transaction.constructor.name === "Object"
  })
}

function isValidDataType(arrayOfTransactions) {
  if (!Array.isArray(arrayOfTransactions)) return false
  
  if (!isInnerElementAnObject(arrayOfTransactions)) return false
  console.log('hey')
  
  if (!doesEveryObjectHaveThreeProperties(arrayOfTransactions)) return false;
}

function doesEveryObjectHaveThreeProperties(arrayOfTransactions) {
  let trueOrFalse = true;
 
  arrayOfTransactions.forEach(object => {
    if (object.keys !== 3) {
      trueOrFalse = false
    }
  })
  
  return trueOrFalse;
}

// Copy Code
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

const transactions2 = [ [] ];

                     


console.log(transactionsFor(101, transactions)); // happy path
// console.log(transactionsFor(-9, transactions)) // happy path
// console.log(transactionsFor(0.98, transactions)) // happy path
// console.log(transactionsFor(0, transactions)) // happy path
// console.log(transactionsFor(101, [{ id: 0.8, movement: 'out', quantity: 15 }])) // happy path
// console.log(transactionsFor(101, [{ id: 0.8, movement: 'out', quantity: -10 }])) // happy path'
// console.log(transactionsFor(101, [{ id: 0.8, movement: 'out', quantity: "105" }])) // happy path

// console.log(transactionsFor(101, {})) // false
// console.log(transactionsFor(101)) // false
// console.log(transactionsFor(101, () => {})) // false
// console.log(transactionsFor(101, '')) // false

// console.log(transactionsFor(101, transactions2)) // false
// console.log(transactionsFor(101, [ 8 ])) // false 
// console.log(transactionsFor(101, ['hello'])) // false
// console.log(transactionsFor(101, [null])) // false
// console.log(transactionsFor(101, [])) // false
// console.log(transactionsFor(101, [undefined])) // false

//console.log(transactionsFor(101, [{id: 101}])) // false because not enough properties
//console.log(transactionsFor(101, [{id: 101, movement: "in", hair: "yes"}])) // wrong property
//console.log(transactionsFor(101, [{ id: 103, movement: 'out', quantity: 15, hair: "yes" }])) // too many properties

// console.log(transactionsFor(NaN, transactions)) // false
// console.log(transactionsFor(Infinity, transactions)) // false
// console.log(transactionsFor('hi', transactions)) // false

// console.log(transactionsFor(101, [{ id: 103, movement: 'out', quantity: 15, hair: "yes" }])) // false


// console.log(transactionsFor(101, [{ id: null, movement: 'out', quantity: 15 }])) //false
// console.log(transactionsFor(101, [{ id: 'hi', movement: 'out', quantity: 15 }])) // false
// console.log(transactionsFor(101, [{ id: Infinity, movement: 'out', quantity: 15 }])) // false
// console.log(transactionsFor(101, [{ id: NaN, movement: 'out', quantity: 15 }])) // false

// console.log(transactionsFor(101, [{ id: 101, movement: 'DOG', quantity: 15 }])) // false
// console.log(transactionsFor(101, [{ id: 0.8, movement: '', quantity: 15 }])) // false
// console.log(transactionsFor(101, [{ id: 0.8, movement: [], quantity: 15 }])) // false

// console.log(transactionsFor(101, [{ id: 0.8, movement: 'out', quantity: NaN }]))// false

// console.log(transactionsFor(101, [{ id: 0.8, movement: 'out', quantity: -Infinity }]))// false


// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]