// Vowel Families
// Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

/*
Problem: Given a first word, find all the vowels in it. Count doesn't matter

rules/requirements: 

input: array of strings
output: an array with one word in it

questions: 1) Can we assume there will always be 2 or more words in the array? (No, if there's only one word in there, return the word itself.)
2) Can we assume every element inside will be a string?  no, it could be any other data type.

Examples/test cases:

Data structures:
1) input an array of strings
2) output an array of strings or just one string

Algorithm:
-Declare function `sameVowelGroup` that takes parameter `arrayOfWords`
  -Declare vowelsFromFirstWord = string.match(/[aeiou]/g)
    -Sort it
    -new Set it to get unique values
  
  -Iterate through the rest of the words, one word at a time (the first one again too)
    -Get all the vowels from the other words
    -pass to helper function `getVowels` to get an `arrayOfVowels`
    -Pass to helper function `areAllSame`
      -Check if they're all the same.

*/

function sameVowelGroup(arrayOfWords) {
  let regex = new RegExp(/[aeiou]/g)
  let vowelsFromFirstWord = arrayOfWords[0].match(regex)
  vowelsFromFirstWord = [...new Set(vowelsFromFirstWord)].sort();
  
  let a = arrayOfWords.filter(word => {
    let arrOfMatches = word.match(regex).sort();
    let uniq = [...new Set(arrOfMatches)];
    return checkIfSame(uniq, vowelsFromFirstWord)
  })
  
  return a;
}

function checkIfSame(uniq, vowelsFromFirstWord) {
  return uniq.every((char, index) => char === vowelsFromFirstWord[index])
}

console.log(sameVowelGroup(["toe", "ocelot", "maniac"])) // ["toe", "ocelot"]

console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])) // ["many"]

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])) // ["hoops", "bot", "bottom"]
