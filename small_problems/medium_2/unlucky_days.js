// Unlucky Days
// Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

/*
Problem: Given a year, return the number of Friday the 13ths in THAT year year.

rules/requirements:
1) Assume that the year is greater than 1752.
2) Assume that the same calendar will remain in use for the foreseeable future.

input: year in 4 digits
output: an integer greater than or equal to 0 indicating how many Friday the 13ths there were in THAT year.

questions:
1) Within the `getDay` method, which number from 0-6 represents Friday?  Sunday is 0, and Saturday is 6, so 5 is Friday. 

Examples/test cases:
console.log(fridayThe13ths(1986));      // 1

console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

Data structures:

Input: Year in integer form
Output: integer form

Algorithm:
-Declare a function `fridayThe13ths` taking the `year`
  -Pass to helper function `isValidDataType`

  -Pass to helper function `isValidData`

  -make all the Dates from January 1 of that year to day 365 using helper function `makeDates` save in `dates365`

  -Filter the dates for when `getDay` is 5 and when getDate is 13


-Helper function `makeDates`
  -make a date Object let a = new Date ('January 01, ${year}`)
  - let b = a.getDate() + 1
  - Create `daysOfYearArray` = []
  - Make a for loop and push in all 365 days

  const appointment = new Date("February 12, 2021 00:00:00");
  appointment.setDate(appointment.getDate() + 2);

  console.log(appointment.getDate()); // 14

-Helper function `isValidDataType`
  -Check that it's an integer

-Helper function `isValidData`
  -Check that it's greater than or equal to 1752
  -Check that it's an integer.

LS Algorithm:  
Here is one possible algorithm for solving the problem:

Iterate over all the months of the given year.
For each month, get the day that falls on the 13th.
Count the 13ths that fall on a Friday.
Return the count.
*/

function fridayThe13ths(year) {
  if (!(isValidDataType(year))) return false
  if (!(isValidData(year))) return false;

  let dates365 = makeDates(year);
}

function makeDates(year) {
  let holder = [];
  let currentDate = new Date(`January 1, ${year}`);
  holder.push(currentDate)
  for (let i = 1; i < 365; i++) {
    console.log(currentDate, "current date 12345");
    currentDate.setDate(i)
    console.log(currentDate, "here i am")
    holder.push(currentDate);
  }
  return holder;
}

function isValidData(year) {
  if (year >= 1752 && Number.isInteger(year)) return true;
  return false;
}

function isValidDataType(year) {
  if (typeof(year) === 'number') return true;
  return false;
}

console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

//LS Answer
function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}