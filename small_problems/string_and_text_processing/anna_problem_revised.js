function doubler(array) {
  if (!isValidDataType(array)) return false;
  
  let arrayOfTransformed = doubleElement(array);
  
  return arrayOfTransformed;
}

function doubleElement(array) {
  let answer = [];
  array.forEach(element => {
    if (typeof(element) === 'number' && isNaN(element)) {
      answer.push(NaN)
      answer.push(NaN)
    } else if (typeof(element) === 'number' && !isNaN(element)) {
      answer.push(element * 2);
    } else if (typeof(element) === 'string') {
      element = element + element
      answer.push(element)
    } else if (typeof(element) === 'object' && element === null) {
      answer.push(null)
    } else {
      answer.push(element);
      answer.push(element);
    }
  })
  return answer;
}

function isValidDataType(element) {
  return Array.isArray(element)
}

console.log(doubler(['car'])) // ['carcar']
console.log(doubler(['4'])) // ['44']
console.log(doubler([5, -5])) // [10, 10]
console.log(doubler([NaN])) // [NaN, NaN]
console.log(doubler([undefined])) // [undefined, undefined]
console.log(doubler([null])) // [null]
console.log(doubler([true, false])) // [true, true, false, false]
console.log(doubler([Infinity, -Infinity])) // [Infinity, Infinity]
console.log(doubler([[1, 'a', { a: 2 }]])) // [[1, 'a', { a: 2 }], [1, 'a', { a: 2 }]]
console.log(doubler([{ a: 1, b: 2 }])) // [{ 1: { a: 1, b: 2 }, 2 :{ a: 1, b: 2 } }]

//Anna's answer
function doubler(arr) {
  let doubledArray = [];

  arr.forEach(elem => {
    if (typeof elem === 'string') {
      doubledArray.push(elem.repeat(2));
    } else if (typeof elem === 'number') {
      if (Number.isNaN(elem)) {
        doubledArray.push(NaN, NaN);
      } else {
        doubledArray.push(elem * 2);
      }
    } else if (Array.isArray(elem)) {
      doubledArray.push([elem, elem]);
    } else if (typeof elem === 'boolean' || typeof elem === 'undefined') {
      doubledArray.push(elem, elem);
    } else if (elem === null) {
      doubledArray.push(null);
    } else if (typeof elem === 'object') {
      doubledArray.push({ '1': elem, '2': elem});
    }
  });
    
  return doubledArray;
}