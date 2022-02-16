// Validating a Set in the Set Game
// In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

// Have the same color or different colors.
// Have the same number or different numbers.
// Have the same shades or different shades.
// Have the same shape or different shapes.
// The four properties are:

// Colors: red, purple, green
// Numbers: 1, 2, 3
// Shades: empty, lined, full
// Shapes: squiggle, oval, diamond
// Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

// Here is an example of a set:

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
// The following is not a set:

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "purple", number: 3, shade: "full", shape: "oval" }
// ]

// Colors are not all identical, but not all different.
// Examples

/*
Problem: Write a function that checks whether the 3 cards are a set or not.

rules/requirements:
1) There are 4 attributes: color, number, shade, shape.
2) Each of the attributes must ALL be the same or ALL different.

input:an array of objects
intermediate data structures: maybe array of subarrays
output: boolean true or false

questions
1) How to check if every property is the same?  (Use the `every` method.)
2) How to check if every property is different/unique?  (use new Set[...elements])

Examples/test cases:

Data structures: 

Algorithm:
-Declare a function `isSet` that takes parameter `arrayOfObjects`
  -pass to helper function `checkColor`, passing `arrayOfObjects`
    -Return true if all colors are the same or all different, return false otherwise.
  -
  
  
-Helper function checkColor
  -Iterate through arrayOfObjects, object by object (card by card)
    -check if they're all the same
      -save in Variable `allSame` the boolean from the `every` method   
  -check if they're all different
      -pass to helper function `checkDifferent`, `arrayOfObjects`
  -Save in variable `allDifferent`
    
-Helper function `checkDifferent`
  -let answer = [];
  iterate through arrayOfObjects, one object at a time
    answer.push(object[color])
    
  return answer.length === 3
*/

function isSet(arrayOfObjects) {
  let answer = new Array(4).fill();
  answer[0] = checkColor(arrayOfObjects)
  answer[1] = checkNumber(arrayOfObjects)
  return answer[0]
}

function checkNumber(arrayOfObjects) {
  let allSame = arrayOfObjects.every(object => {
    return object["number"] === arrayOfObjects[0].number;
  })
  
  let allDifferent = checkDifferent(arrayOfObjects, );
}

function checkDifferent(arrayOfObjects, element) {
  let answer = [];
  arrayOfObjects.forEach(object => {
    answer.push(object[element])
  })
  
  return answer.length === 3;
}

function checkColor(arrayOfObjects) {
  let allSame = arrayOfObjects.every(object => {
    return object["color"] === arrayOfObjects[0].color
  })
  
  let allDifferent = checkDifferent(arrayOfObjects)
  return allSame || allDifferent;
}
console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])) // true

//console.log(isSet([
//   { color: "purple", number: 1, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 1, shade: "full", shape: "oval" }
// ])) // true

//console.log(isSet([
//   { color: "purple", number: 3, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ])) // false
// Notes
// A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
// You can play Set by checking the Resources tab.