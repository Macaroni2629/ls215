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

// The first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K.

// For example: if strArr is [“aaabaaddae”, “aed”] then the smallest substring of N that contains the characters a, e, and d is “dae” located at the end of the string

//So for this example your program should return the string dae.

/*
-The first parameter being the string N
-Second parameter being a string K of some characters

Goal: determine the smallest substring of N that contains all the characters in K.

rules
-can be duplicate
-other letters can be in between

Examples:
down below

DS:
array

A:
substrings an empty array
find strings that match this pattern:


contains these letters, one or more, other middle characters are possible

put match in empty array
grab one with smallest length

must contain all the letters from s2
could be 1 or more from s2
also could contain other letters in between

substrings forwards and normal reverse?
combine the arrays into one

find substrings that includes every letter from s2(array) filtered
grab smallest one
*/

function minWindowSubstring(s1, s2) {
  let allSubstrs =  makeSubstrings1(s1).concat(makeSubstrings2(s1));
  let filtered = allSubstrs.filter(substring => includesAllChars(substring, s2));
  let filteredLengths = filtered.map(substr => substr.length);
  let min = Math.min(...filteredLengths);
  return filtered.filter(substring => substring.length === min); 
}

function includesAllChars(substring, originalS2) {
  let obj1 = numOfTimes(substring);
  let obj2 = numOfTimes(originalS2);
  return [...originalS2].every(char => substring.includes(char) obj1[char] === obj2[char]);
}

function numOfTimes(string) {
  let obj = {};
  
  [...string].map(char => {
    let regex = new RegExp(char, "g");
    let times = string.match(regex).length;
    obj[char] = times;
  });
  
  return obj;
}

function makeSubstrings1(string1) {
  let answer = [];
  for (let i = 0; i <= string1.length; i++) {
    for (let j = 0; j <= string1.length; j++) {
      answer.push(string1.slice(i, j))
    }
  }
  return answer.sort((a, b) => a.length - b.length).filter(c => c !== '');
}

function makeSubstrings2(string1) {
  let answer = [];
  for (let i = string1.length; i >= 0; i--) {
    for (let j = string1.length; j >= 0; j--) {
      answer.push(string1.slice(i, j))
    }
  }
  return answer.sort((a, b) => a.length - b.length).filter(c => c !== '');
}

console.log(minWindowSubstring("aaabaaddae", "aed")) // "dae"
console.log(minWindowSubstring("aaffhkksemckelloe", "fhea")) // == 'affhkkse'
console.log(minWindowSubstring("", "fhea")) // == ''
console.log(minWindowSubstring('iuebisijhanhiiijjgsiasd', 'hijs')) // sijh
console.log(minWindowSubstring('aaaaabdbbbcccccc', 'abc')) // abdbbbc'

console.log(minWindowSubstring("ahffaksfajeeubsne", "jefaa")) // == 'aksfaje'
console.log(minWindowSubstring('abc', 'abbc')) // "Not possible"


//Anna's answer
function MinWindowSubstring(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return '';
  }
  
  let substrings = getSubstrings(str1);

  let relevantSubstrings = substrings.filter(substr => {
    return str2.split('').every(char => {
      let regex = new RegExp(char, 'g')
      return (substr.match(regex) || []).length >= str2.match(regex).length
    });
  });

  return relevantSubstrings.reduce((last, current) => {
    if (last.length < current.length) {
      return last;
    } else {
      return current;
    }
  })
}

function getSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i; j < str.length; j += 1) {
      console.log(str.slice(i, j + 5));
      substrings.push(str.slice(i, j + 5))
    }
  }

  return substrings;
}

console.log(MinWindowSubstring("ahffaksfajeeubsne", "jefaa")) // == 'aksfaje'
// console.log(MinWindowSubstring("aaffhkksemckelloe", "fhea")) // == 'affhkkse'
// console.log(MinWindowSubstring("", "fhea")) // == ''

// console.log(minWindowSubstring("aaabaaddae", "aed")) // "dae"
// console.log(minWindowSubstring("aaffhkksemckelloe", "fhea")) // == 'affhkkse'
// console.log(minWindowSubstring("", "fhea")) // == ''
// console.log(minWindowSubstring('iuebisijhanhiiijjgsiasd', 'hijs')) // sijh
// console.log(minWindowSubstring('aaaaabdbbbcccccc', 'abc')) // abdbbbc'

// console.log(minWindowSubstring("ahffaksfajeeubsne", "jefaa")) // == 'aksfaje'
// console.log(minWindowSubstring('abc', 'abbc')) // "Not possible"