How Many
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

Example:

Copy Code
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(elements) {
  const occurrences = {};

  for (let i = 0; i < elements.length; i += 1) {
    occurrences[elements[i]] = occurrences[elements[i]] || 0;
    occurrences[elements[i]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

function countOccurrences(array) {
  let count = array.reduce((obj, ele) => {
    obj[ele] ? obj[ele] += 1 : obj[ele] = 1;
    return obj;
  }, {});

  Object.entries(count).forEach(arr =>
    console.log(`${arr[0]} => ${arr[1]}`));
}