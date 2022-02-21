Diamonds
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Examples:

Copy Code
diamond(1);
// logs
*
Copy Code
diamond(3);
// logs
 *
***
 *
Copy Code
diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
  



function diamond(size) {
  for (let i = 1; i < size; i += 2) {
    console.log(' '.repeat((size - i) / 2) + '*'.repeat(i));
  }
  for (let j = size; j > 0; j -= 2) {
    console.log(' '.repeat((size - j) / 2) + '*'.repeat(j));
  }
}