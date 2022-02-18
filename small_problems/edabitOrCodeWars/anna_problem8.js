// The first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is [“aaabaaddae”, “aed”] then the smallest substring of N that contains the characters a, e, and d is “dae” located at the end of the string. So for this example your program should return the string dae.

/*
Problem: Given a first string, find the shortest substring from the first string that includes all the letters from the second string.

rules/requirements:

input:
output:

questions:

Examples/test cases:

Data structures:

Algorithm:
1) make all the substrings
2) check if all chars in second string are in first

*/

function minWindowSubstring(string1, string2) {
  let arrayOfSubstrings = makeSubstrings(string1);
  let arrayOfTrues = []
  arrayOfSubstrings = arrayOfSubstrings.filter(string => string !== '');
  containsLetters(arrayOfSubstrings, string2, arrayOfTrues);
  if (string2.length > arrayOfTrues[0].length) {
    return "Not possible"
  }
  return arrayOfTrues[0]
}

function containsLetters(arrayOfSubstrings, string2, arrayOfTrues) { 
  arrayOfSubstrings.forEach(substring => {
    checkIncludes(substring, string2, arrayOfTrues)
  })
}
                            
function checkIncludes (substring, string2, arrayOfTrues) {
   for (let i = 0; i < string2.length; i++) {
     if (substring.includes(string2[i])) {
       continue
     } else {
       return;
     }
   }
  arrayOfTrues.push(substring)
}


function makeSubstrings(string1) {
  let answer = [];
  for (let i = 0; i <= string1.length; i++) {
    for (let j = 0; j <= string1.length; j++) {
      answer.push(string1.slice(i, j))
    }
  }
  return answer.sort((a, b) => a.length - b.length);
}


console.log(minWindowSubstring("aaabaaddae", "aed")) // "dae"
console.log(minWindowSubstring('abc', 'abbc')) // "Not possible"

// Think of how you can process your first string so you can check different chunks of it to see if it includes the chars from the second string and then choose the shortest chunk.