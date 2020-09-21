/* Write a function that takes an array argument and returns a new array that 
 * contains all the argument's elements in their original order followed by all the 
 * argument's elements in reverse order.
 */

function sortDescending(arr) {
  let copyArr = arr.slice();
  return copyArr.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]
