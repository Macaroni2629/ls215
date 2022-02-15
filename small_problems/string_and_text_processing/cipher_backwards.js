function isValidDataType(string) {
  if (typeof(string) === 'string') return true
  return false
}

function cleanString(string) {
  return string.replace(/[^a-z]/ig, '')
}

function createRails(numberOfRails) {
  numberOfRails = numberOfRails - 1
  let holder = new Array
  for (let i = 0; i <= numberOfRails; i++) {
    holder.push([])
  }
  return holder;
}

function decode(string, numberOfRails = 3) {
  if (numberOfRails === 1) return string;
  if (!isValidDataType(string)) return false
  let cleanedString = cleanString(string);
  
  let answer = createRails(numberOfRails);
  let startStringIndex = 0;
  let currentStringIndex = 0;
  for (let currentRailNumber = 0; currentRailNumber < numberOfRails; currentRailNumber++) {
    currentStringIndex = startStringIndex;
    while (currentStringIndex < cleanedString.length) {
      answer[currentRailNumber].push(cleanedString[currentStringIndex]);
      currentStringIndex += numberOfRails * 2;
    }
    startStringIndex += 1;
  }

  console.log(answer)
  return answer;
}


console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3) === 'WEAREDISCOVEREDFLEEATONCE');
                                                        0121012101210121012101210
//console.log(decode('WCLEESOFECAIVDENRDEEAOERT', 5) === "WEAREDISCOVEREDFLEEATONCE");
// console.log(decode('ABCDEFGHIJKLMNOP', 1) === 'ABCDEFGHIJKLMNOP');
// console.log(decode('XXXXXXXXXOOOOOOOOO', 2) === 'XOXOXOXOXOXOXOXOXO');
// console.log(decode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');