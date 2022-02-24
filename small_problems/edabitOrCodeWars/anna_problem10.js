/*
Problem: Given an array of elements, move the zeroes to the end.

rules/requirements:
1) Turn string zeroes into the number zero.
2) 

input:
output:

questions:

Examples/test cases:
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) //== [false,1,1,2,1,3,"a",0,0]
Here, the two zeroes get moved to the end.
console.log(moveZeros([false,1,'0',1,2,0,1,3,"a0"])) // [false,1,1,2,1,3,"a",0,0,0]
Here, the string zero at index 2 gets moved to the end, and all the other ones move down.
also, the string "a0" gets separated into "a" and zero.  the "a" stays in place, and the zero gets moved to the end.
console.log(moveZeros([0,'0',0])) // [0,0,0]
Here, one string zero gets converted to 0.
console.log(moveZeros([false,"a", 3, 6])) // [false,"a", 3, 6]
Here, nothing gets moved because there are no zeroes.
console.log(moveZeros([false,"a", 30, '6001'])) // [false,"a", 3, '61', 0, 0, 00
Here, every zero was extracted out and moved to the end.
console.log(moveZeros([])) // []
Here, empty array returns empty array.
console.log(String(moveZeros([false,10,0,1,2,0,1,3,"a"])) === String([false,1,1,2,1,3,"a",0,0,0]))
Here, a 0 from the number 10 gets extracted.  The original number becomes 1.  The zero gets tacked on to the end.
console.log(String(moveZeros([false,10,0,400,2,0,1,3,"a"])) === String([false,1,4,2,1,3,"a",0,0,0,0,0]))
Here, the zero gets extracted from numbers and gets tacked on to the end.
console.log(String(moveZeros([false,10,0,400,"50",0,1,3,"a"])) === String([false,1,4,"5",1,3,"a",0,0,0,0,0,0]))

Data structures:
input array

output array
regex to extract zeroes out of strings


Algorithm:
Need method that will splice out a zero and cause all the other ones to move down.

need a place to store zeroes, or to at least count them.

And need to do something about if I find a zero in a string, ohw to separate the string from the zero.

And need to do something about zeroes in the middle of integers.

Iterate throug an array of elemens
  -Declare `zerosToAdd` to 0
  -Declare `result` to [].
  Check if it's a string, pass to helper method `dealWithStrings`, `zerosToAdd`, `result`
    -If it's a string that contains 0's
      -if it does, pass to helper method
      -If it doesn't, push into into `result` array
  -Check if it's a number, pass to helper method `dealWithNumbers` along with `result` and `zerosToAdd`
      -pass to helper method `dealWithNumbers` along with  `result`
      
  -If it's not a string or an integer
    -Push it into `result` array
    
  -Return `result` array
      
helper method `dealWithNumbers`
  -Check if it's a number that has zeroes or not
    -If it does, extract them using helper method `extractZeros`
    -If it doesn't push the number into `result`

helper method `extractZeros` (extract from strings)
  -Extract what's not a zero.
    -Push it into `result`
  -Extract the zeroes.
    - Count how many

Helper method `dealWithStrings`
  -Check if the string contains zeroes anywhere using string.match(/0/)
    -If it does, count the length of the array from the resulting array from string.match

*/

function moveZeros(arrayOfElements) {
  let zerosToAdd = [];
  let result = [];
  
  arrayOfElements.forEach(element => {
    if (typeof element === 'string') {
      dealWithStrings(element, zerosToAdd, result)
    } else if (typeof element === 'number') {
      dealWithNumbers(element, zerosToAdd, result)
    } else if (typeof element === "boolean") {
      result.push(element)
    }
  })
  let length = zerosToAdd.length;
  if (length !== 0) {
    addZeros(result, length)
  }
  result = result.filter(element => element !== '')
  return result;
}

function addZeros(result, length) {
  for (let i = length; i > 0; i -= 1) {
    result.push(0)
  }
}

function dealWithNumbers(element, zerosToAdd, result) {
  if (element === 0) {
    zerosToAdd.push(0);
  } else if (String(element).includes("0")) {
    extractZeros(element, zerosToAdd, result)
  } else {
    result.push(element)
  }
}

function extractZeros(element, zerosToAdd, result) {
  let arrayOfChars = [...String(element)]
  let resultNum = []
  arrayOfChars.forEach(char => {
    if (char === "0") {
      zerosToAdd.push(0)
    } else {
      resultNum.push(Number(char))
    }
  })
  
  resultNum = Number(resultNum.join(''))
  result.push(resultNum)
  result = result.filter(element => element !== '');
}

function dealWithStrings(element, zerosToAdd, result) {
  if (/0/.test(element)) { //if the string has zeros with it
    let arrayOfZeros = element.match(/0/g) || []
    zerosToAdd.push(0);
    let notZeros = element.match(/[^0]/g) || []
    result.push(notZeros.join(''))
    result = result.filter(element => element !== '')
  } else { //if the string doesn't have zeros in it
    result.push(element)
  }
}

//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) //== [false,1,1,2,1,3,"a",0,0]
// console.log(moveZeros([false,1,'0',1,2,0,1,3,"a0"])) // [false,1,1,2,1,3,"a",0,0,0]
//console.log(moveZeros([0,'0',0])) // [0,0,0]
//console.log(moveZeros([false,"a", 3, 6])) // [false,"a", 3, 6]
//console.log(moveZeros([false,"a", 30, '6001'])) // [false,"a", 3, '61', 0, 0, 0
//console.log(moveZeros([])) // []
//console.log(String(moveZeros([false,10,0,1,2,0,1,3,"a"]))) //=== String([false,1,1,2,1,3,"a",0,0,0]))
//console.log(String(moveZeros([false,10,0,400,2,0,1,3,"a"]))) //=== String([false,1,4,2,1,3,"a",0,0,0,0,0]))
 console.log(String(moveZeros([false,10,0,400,"50",0,1,3,"a"])))// === String([false,1,4,"5",1,3,"a",0,0,0,0,0,0]))

//Anna's Answer

 function moveZeros(array) {
  let arrayCopy = [...array];
  let count = 0;

  let convertedArray = arrayCopy.map(elem => {
    if (typeof elem === 'boolean') {
      return elem;
    } else if (typeof elem === 'string') {
      count += (elem.match(/0/g) || []).length;
      return elem.replace(/0/g, '');
    } else if (typeof elem === 'number') {
      elem = String(elem);
      count += (elem.match(/0/g) || []).length;
      elem = elem.replace(/0/g, '');
      return Number(elem);
    }
  });

  return convertedArray.filter(elem => elem !== '' && elem !== 0).concat(getZeros(count));
}

function getZeros(number) {
  let zerosArray = [];

  for (let i = 0; i < number; i += 1) {
    zerosArray.push(0);
  }

  return zerosArray;
}