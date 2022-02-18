// https://edabit.com/challenge/KLyD6Ce6KkA2364sH

// Name Count Equality
// Create a function that counts the embedded names in the string and determines the equality. The names are embedded in a string of mixed special symbols and characters. The names to be counted to are adjoined with the ampersand symbol & and as the second parameter. See the following examples for more details.

// Examples
// equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
// ➞ {"Peter":6, "Paul": 6, "equality": true}

// equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
// ➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// // "difference" key is added to the object if count is not equal.

// equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
// ➞ {"Ken": 0, "Tom": 0, "equality": true}
// Notes
// Make sure to return the result as an object with the corresponding keys seen in the above examples and the difference key when needed.

function equalCount(string1, string2) {
  if (!isValidDataType(string1)) return false
  if (!isValidDataType(string2)) return false;
  
  let arrayOfNames = string2.split("&")
  let firstName = arrayOfNames[0];
  let secondName = arrayOfNames[1];
  
  let firstNameCount = countNames(firstName, string1)
  let secondNameCount = countNames(secondName, string1)
  
  let answer = createObject(firstName, firstNameCount, secondName, secondNameCount)
  
  return answer;
}

function createObject(firstName, firstNameCount, secondName, secondNameCount) {
  let answer = {};
  
  answer[`${firstName}`] = firstNameCount;
  answer[`${secondName}`] = secondNameCount;
  
  if (firstNameCount === secondNameCount) {
    answer["equality"] = true;
  } else {
    let difference = Math.abs(firstNameCount - secondNameCount)
    answer["equailty"] = false;
    answer["difference"] = difference;
  }
  return answer;
}

function countNames(name, string) {
  let regex = new RegExp (`${name}`, "g")
  let arrayOfMatches = string.match(regex) || [];
  return arrayOfMatches.length;
}

function isValidDataType(string) {
  if (typeof string === "string") return true;
  return false;
}
