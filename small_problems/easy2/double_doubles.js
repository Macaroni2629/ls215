Double Doubles
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Examples:

Copy Code
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676


function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  const stringNumber = String(number);
  const center = stringNumber.length / 2;
  const leftNumber = stringNumber.substring(0, center);
  const rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

function twice(num) {
  let number = String(num);
  let left = '';
  let right = '';
  let mid = number.length / 2;

  for (let idx = 0; idx < mid; idx++) {
    left += number[idx];
    right += number[mid + idx];
  }

  return left === right ? num : num * 2;  
}