Searching 101
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

Copy Code
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
const numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}