/*ALGORITHM
- Declare a function `sortEvens` that takes parameter `array`
    -Helper function `validDataType`
    
    -Declare `holder` to {}.
    
    -Find all the numbers that are sortable and their indexes.
      -pass to helper method `findAllSortableNumbers` and save in `holder`, passing in `array` and `holder`
    
    -Get just the array of sortable values.
      -Declare `arrayOfValues` and use `Object.values`, passing in `holder` as an argument.
    
    -Sort `arrayOfValues`.  Make sure to sort by the integer version of the number.  Will have to convert string versions to numbers for the sorting process.
    
    -Declare `arrayOfKeys` and use `Object.keys`, passing in `holder` as an argument.
    
    -Iterate through `arrayOfKeys`, also using `index` as a parameter.
      -On each element, mutate `array` by using array[element] = arrayOfValues[index]
      
    -Return array
  
  -Helper function `validDataType`
    -Return false if invalid data type.
    
  -Helper function `findAllSortableNumbers`
    -Iterate through the `array`, one `element` at at time.
      -Check if the element is a string.
        -Pass `element` and `holder` to helper method `findStringNumbers`.  Also pass `index`
      - if the element is even and a number
        -If it is, store the `index` as the key in `holder` and the element in the `array` as the value.
      -Return `holder`
        
  -Helper function `findStringNumbers`
    -Check if the element is a string version of a number
      -If it is, save in `object` the new key value pair
    -If it's not, do nothing.
*/

function sortEvens(array) {
  if (!(validDataType(array))) return false
  
  let holder = {};
  
  findAllSortableNumbers(array, holder);
  
  let arrayOfValues = Object.values(holder)
  
  arrayOfValues.sort((a, b) => {
    return (Number(a) - Number(b))
  })
  
  let arrayOfKeys = Object.keys(holder);
  
  arrayOfKeys.forEach((element, index) => {
    array[element] = arrayOfValues[index];
  })
  
  return array;
}

function findAllSortableNumbers(array, holder) {
  array.forEach((element, index) => {
    if (typeof(element) === 'string') {
      findStringNumbers(element, holder, index);
    } else if (Number.isInteger(element) && element % 2 === 0) {
      holder[index] = element;
    }
  })
}

function findStringNumbers(element, holder, index) {
  if (element.match(/[02468]/g)) {
    holder[index] = element;
  }
}
  
function validDataType(array) {
  if (typeof(array) === 'object' && Array.isArray(array)) return true
  return false
}



console.log(sortEvens([6, 'd', 'j', 5, 3, 2, 'k'])) // [2, 'd', 'j', 5, 3, 6, 'k']
console.log(sortEvens([])) // []
 console.log(sortEvens([6, 8, 2, 22, '0'])) // ['0', 2, 6, 8, 22]
console.log(sortEvens(['a', 'j', 9, 11, 3, 1])) // ['a', 'j', 9, 11, 3, 1]
console.log(sortEvens(['a', 'j', '24', '9', 11, 3, '1', '10', '0'])) // ['a', 'j', '0', '9', 11, 3, 1, '10', '24']
console.log(sortEvens([5, 3, 2, 8, 1, 4])) // [5, 3, 2, 4, 1, 8])
console.log(sortEvens([23, -9, 6, 102, 31, -6])) // [23, -9, -6, 6, 31, 102]

console.log(sortEvens([5, 2, 1], [0, 10 -5])) // [5, 2, 1]

console.log(sortEvens()) // false
console.log(sortEvens('')) // false
console.log(sortEvens(undefined)) // false
console.log(sortEvens({})) // false
console.log(sortEvens(function() {})) // false
console.log(sortEvens([[2], [0]])) // [[2], [0]]

// Anna's answer
function sortEvens(arr) {
  let arrayCopy = [...arr];
  let evensArray = getEvens(arrayCopy);
  let sortedEvens = sortEvenNumbers(evensArray);
  let replacedEvens = replaceEvenNumber(arrayCopy);

  return mergedArray = mergeArrays(sortedEvens, replacedEvens)
}

function getEvens(array) {
  let evens = [];

  array.forEach(elem => {
    if (Number(elem) % 2 === 0) {
      evens.push(elem);
    }
  });

  return evens;
}

function sortEvenNumbers(evensArray) {
  return evensArray.sort((a, b) => {
    if (Number(a) > Number(b)) {
      return 1;
    } else if (Number(a) < Number(b)) {
      return -1;
    } else {
      return 0;
    }
  });
}

function replaceEvenNumber(arrayCopy) {
  return arrayCopy.map(elem => {
    if (Number(elem) % 2 === 0) {
      return '-'
    } else {
      return elem;
    }
  });
}

function mergeArrays(sortedEvens, arrayCopy) {
  return arrayCopy.map(elem => {
    if (elem === '-') {
      return sortedEvens.shift();
    } else {
      return elem;
    }
  })
}