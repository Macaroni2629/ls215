// Very nice! According to the way you answered your questions you only missed one test case - what happens if there is more than one 0 at the end. What would you do with computer00 ? Also, I understand you said that if it ends in 9 you increment to 10 but for the last test case that you have 19 plus 1 is not 110. It would have made sense to increment it to 20. However, that’s how you answered it and you wrote your code appropriately. One more thing, although your code covers it by accident you didn’t test for digits anywhere else in the string like 123computer1 . Even if you know your code is going to cover it, always include it in the test cases.
// Now I’ll give you the test cases (according to how I would have answered the questions) and try to solve it again.

function incrementer(string) {
  let totalZeroes;
  if (!isValidDataType(string)) return false
  
  if (string === '') return "1"
  
  if (string.match(/[^0-9]$/)) {
    string = string + "1" 
  } else if (string.match(/[a-z][0]+$/)) {
    string = string + "1"
  } else if (string.match(/[0]{1}$/)) {
    string = string.slice(0, string.length - 1) + "1"
  } else if (string.match(/[0-9]$/)) {
    let number = string.match(/[0-9]+$/).join('');
    let origNumberLength = number.length;
    number = Number(number);
    number += 1;
    let newNumberLength = String(number).length
    totalZeroes = origNumberLength - String(number).length
    totalZeroes = totalZeroes < 0 ? 0 : totalZeroes
    string = string.slice(0, string.length - origNumberLength) + "0".repeat(totalZeroes) + String(number)
  } 
  
  let cleanedString = cleanString(string)
  return cleanedString
}

function cleanString(string) {
  let rightHalfArray = string.match(/[\d]+$/g)
  let rightHalfLength = rightHalfArray[0].length;
  let leftHalfArray = string.match(/[a-z]/gi)
  return leftHalfArray.join('') + rightHalfArray.join('')
}


function isValidDataType(string) {
  if (typeof(string) !== "string") return false
  return true
}

/*
Patterns I see: 
1) If it ends in 0, append a 1.
2) If it's three consecutive 0's for example, append a 1.
3) If it's a positive integer number, increment that by 1.  For example, increment 15 to 16.
4) if it's a number that starts with 0's, increment by 1.
5) if it doesn't end in a number at all, append a 1.
6) 

*/
console.log(incrementer('')); // '1'
console.log(incrementer('computer')); // 'computer1'
console.log(incrementer('computer1')); // 'computer2'
console.log(incrementer('computer0')); // 'computer01'
console.log(incrementer('computer000')); // 'computer0001'
 console.log(incrementer('computer15')); // 'computer16'
console.log(incrementer('computer99')); // 'computer100'
console.log(incrementer('computer0099')); // 'computer0100'
console.log(incrementer('computer00990')); // 'computer00991'
console.log(incrementer('1264comp67uter00990')); // 'computer00991'
console.log(incrementer('computer')); // 'computer1'
console.log(incrementer('computer0')); // 'computer01'
console.log(incrementer('computer1')) // 'computer2'
console.log(incrementer('computer129')) // 'computer130'