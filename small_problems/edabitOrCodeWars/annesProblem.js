// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.

// Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round.

// If you won more rounds than your spouse, return "ME!"
// If your spouse won more rounds, return "SPOUSE!"

/*
Problem: The fight between you and your spouse.  There's an object with 3 rounds. Determine the winner by countin gwho won the most rounds.

rules/requirements: 
1) Whoever scores most points per round, wins that round.  Whoever won the most rounds won.



questions:
1) Is it possible to get score of 0?  yes
2) not possible to get negative answer
3) need to account for invalid, Return "Invalid Input"
4) can assume that the points will always be in integer form.
5) If there's a tie within a round, nobody gets a point, it doesn't count towards a win for anybody.
6) A tie in terms of rounds means.. the number of rounds i won is equal to the number of rounds my spouse won.  if it's a tie, we want to return, "NOBODY!"

Examples/test cases:
console.log(determineWinnerOfFight({ outer object appears to be a whole match/game
  round1: { `round1` is a property with value being an object with me and spouse as keys, and our points as values which are positive integers greater than or equal to 0
    me: 40, --- this round, i won
    spouse: 5,
  },
  round2: {
    me: 9,  ----- thi sround, spouse won
    spouse: 10,
  },
  round3: {
    me: 9, ----this round, spouse won
    spouse: 10,
  },
})) 
//➞ "SPOUSE!"  --- output is a string in caps with an exclamation point

console.log(determineWinnerOfFight({
  round1: {
    me: 10,  /// i won this round
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20, // spouse won this round
  },
  round3: {
    me: 15, // i won this round
    spouse: 10,
  }, 
}))    i won this game-- "ME!"

Data structures:
input: an object with 3 key value pairs.  Each key is a round that's numbered.  Each value is an object with 2 key value pairs with names me and spouse.  the values of those integers greater than or equal to 0

INtermediate data structures: Need an object to keep track of the winners of rounds
could just have variables to store who has how many round wins

output:STRING

Algorithm:
Declare a function `determineWinnerOfFight` that takes parameter `match`
-  - guard clause to check for undefined.  If it is, return "Invalid Input"
  - if typeof(match) === "object" && Object.keys(match).length === 0
  - guard clause to check for null.  if it is, return "Invalid Input"
    - the two checks for null: do typeof(arg) === "object" AND it equals null
  -Helper function `isValidDataType` pass parameter `match`
    -If false, return "Invalid Input"
    
  -Declare `arrayOfRounds` = Object.keys(match)
  
  -Declare scoreBoard = {me: 0, spouse: 0}
  
  -Iterate through arrayOfRounds one round at a time.
    Check if the value associated with `me` is greater than the value associated with `spouse`
    -If it is, increment the me property by 1
    -If the spouse is greater, increment by 1
    -If if it's a tie, do nothing
    
  -Declare arrayOfScoreBoardKeys = Object.keys(scoreBoard);
  
    -Iterate through arrayOfScoreboardKeys
      -Check if me value is greater:  if it is, return "ME!"
      -If sposue value is greater: Return "SPOUSE!"
      -Else return "NOBODY!"
  
  
-Helper function `isValidDataType`
  -Check to make sure that the input is an object. 
  - callingobject.constructor.name === "Object"
    -If it's not, return false

-Declare arrayOfScoreBoardKeys = Object.keys(scoreBoard);
    let answer;
    -Iterate through arrayOfScoreboardKeys
      -Check if me value is greater:  if it is, assign answer = "ME!"
      -If sposue value is greater: assign answer = "SPOUSE!"
      -Else assign answer = "NOBODY!"

  -Return answer
*/

function invalidInput(obj) {
  return (!obj || obj.constructor !== Object) || Object.keys(obj).length === 0;
}

- When using the object.constructor.name === 'Object' use it with 
    -typeof object === 'object' && object !== null (just things to remember when validating)

function determineWinnerOfFight(match) {
  
  if (match === undefined) return "Invalid Input"
  if (match === null && typeof(match) === 'object') return "Invalid Input"
  if (typeof match === "object" && Object.keys(match).length === 0) return "Invalid Input"
  if (!isValidDataType(match)) return "Invalid Input"
  
  let arrayOfRounds = Object.keys(match)
  
  let scoreBoard = { me: 0, spouse: 0}
  
  arrayOfRounds.forEach(round => {
    if (match[round]["me"] > match[round]["spouse"]) {
      scoreBoard["me"] += 1;
    } else if (match[round]["me"] < match[round]["spouse"]) {
      scoreBoard["spouse"] += 1;
    } 
  })
  
   let arrayOfScoreBoardKeys = Object.keys(scoreBoard);
  
  let answer;
  arrayOfScoreBoardKeys.forEach(person => {
    if (scoreBoard["me"] > scoreBoard["spouse"]) {
      answer = "ME!"
    } else if (scoreBoard["me"] < scoreBoard["spouse"]) {
      answer = "SPOUSE!"
    } else {
      answer = "NOBODY!"
    }
  })
  
  return answer;
}

function isValidDataType(match) {
  if (match.constructor.name === "Object") return true;
  return false
}


console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})) 
//➞ "SPOUSE!"

console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 15,
    spouse: 10,
  },
})) 
//➞ "ME!"

console.log(determineWinnerOfFight({
  round1: {
    me: 20,
    spouse: 5,
  },
  round2: {
    me: 30,
    spouse: 20,
  },
  round3: {
    me: 100,
    spouse: 10,
  },
}))
// => "ME!"
console.log(determineWinnerOfFight({
  round1: {
    me: 5,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 5,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}))

// // => "NOBODY!"


console.log(determineWinnerOfFight([])) // "Invalid Input"
console.log(determineWinnerOfFight(undefined)) // "Invalid Input"
console.log(determineWinnerOfFight(8)) // "Invalid Input"
console.log(determineWinnerOfFight("hello")) // "Invalid Input"
console.log(determineWinnerOfFight(function () {})) // "Invalid Input"
console.log(determineWinnerOfFight(null)) // "Invalid Input"
console.log(determineWinnerOfFight(NaN)) // "Invalid Input"
console.log(determineWinnerOfFight(Infinity)) // "Invalid Input"
console.log(determineWinnerOfFight(false)) // "Invalid Input"

console.log(determineWinnerOfFight({})) //➞ "Invalid Input"

Biggest problem I had was not having validation down pat.  15 minutes devoted to validate objects.  