/* Write a function like the previous one, except this time return the last count 
 * elements as a new array.
 */

function lastNOf(arr, count) {
  let result = [];
  for (let idx = arr.length - count; idx < arr.length; idx++) {
    result.push(arr[idx]);
  }

  return result;
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
