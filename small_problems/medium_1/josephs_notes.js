/*
Arrays
 .moving left to right from items
 .idxs
 .mutating
 .removing and replacing
Objects
Numbers
Strings
Loops
Nested Loops
Nested Arrays with objs

Knowing how to test case
how to think about assumptions

Time Management for test

PEDAC
How to break a problem
Definitions
Input
output
implicit and explicit rules
Thinking in different levels of abstractions for the problem <-- higher level thinking of the problem
*/


// The police call. They need a more detailed list of the stolen goods.

// You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.

// Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.

/*
read and write if you can
understand problem
understand happy path first before overwhelmed
then think invalid inputs
*/


//Examples

/*
Make each array an object where room is a key, and has value of empty object
match item, to value
set match, to empty object based on current idx

make each item and price an object through merging
make each room an object and assign the itemPrice object as it's value

  {
    basement: {}
  },
  
  {
    garage: {}
  }  
    
*/

// ➞ {
//   basement: {
//     "baseball bat": 500
//   },
//   garage: {
//     horses : 110,
//     cadillac: 2000,
//     flowers: 30
//   }
// }
/*
// 

// Return: In main subarray mansion:
// room = [0][0]
// items = [0][1]
// prices = [0][2]

PROBLEM RESTATED: You're given an array with nested arrays that represent each room in your mansion where goods were stolen. 
Each room will have 2 subarrays, one for the stolens and the other for its values.

QUESTIONS:
1) What if they input invalid data types? ()
2) What if the prices are negative?  (Return false)

RULES EXPLICIT:
1) 0 index of the mansion array is the name of the room
2) At the 1 index of the mansion array is a subarray containing items in the room
3) At the 2 index of the mansion array is a subarray containing the values of the items, and the indexes correspond with the items in the mansion[1]
4) They always match, the items and their values.

RULES IMPLICIT:
1) They take everything from the mansion.
2) 

EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)

INPUT(S):
  - an array of subarrays 

OUTPUTS:
  - An object with keys as rooms and values as objects again.. Within that object, there's keys as items, and values as price
   ➞ {
//   basement: {
//     "baseball bat": 500
//   },
//   garage: {
//     horses : 110,
//     cadillac: 2000,
//     flowers: 30
//   }
// }
/*
  Example 
  make each room and object, combine items and prices into an empty object and put in the room obj
  
  
ALGORITHM (break into problems + guard clauses):
  - Declare a function `makeDetailedList` that takes parameter `mansion`
      
    -Make `answer` object declare to {}
    
    -Label all the rooms in the final `answer`
      -Iterate through `mansion`, one subarray (room) at a time, with `index` parameter
      -Create key value pair with mansion[index][0] (index that will be constantly changing)]
        -For the value, set it equal to an object.
        (So now I've made the `answer` object with keys being the names of the rooms and values being empty objects right now.)
        
    -Fill the rooms with the stolen objects and their values.
      -Iterate through `answer` object, one room at a time.
      -At each room, create key being the item, which is mansion[0][1][index] (note that this starts from index 1, NOT zero)
      -And set the value to mansion[0]
      
    -
      
   
*/ 


// Notes
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

function makeDetailedList(arr) {
  let result = {};
  
  arr.forEach(roomSubArr => {
    let room = roomSubArr[0];
    let items = roomSubArr[1];
    let prices = roomSubArr[2];
        
    let itemValueObj = itemValuePair(items, prices);
    result[room] = itemValueObj;
  });
  
  return result;
}

function itemValuePair(arr1, arr2) {
  let resultObj = {};
  arr1.forEach((ele, idx) => resultObj[ele] = arr2[idx]);
  return resultObj;
}

console.log(makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]]));

console.log(makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]));


/* How to think of Test Cases
  functions:
    always takes x argument?, will mutate?
  arguments and parameters:
  argument always given?, if not what do I do
  then data structures
    -Objects
      -mutative?
      -key: is always ___? empty string, this length, ___? *always will be string
      -value: always this data type? if not, then what? always string? if no, other primitives?
    -Array
      -different data types in array? Objects. strings, other primitives?
    -Numbers: always positive?, always negative? floats? NaN? etc.
    -Strings: empty? empty spaces?, uppercase? lowerCase?, puncuation? only alpha? only digits?
*/