/* Using the function from the previous problem, What happens if you pass a
 * count greater than the length of the array? How can you fix the function so
 * it returns a new instance of the entire array when count is greater than the 
 * array length?
 * 
 * ANSWER:
 * `undefined` values get unshifted to the Array equal to the difference between
 * the count value and the length of the Array.
 */

function lastNOf(arr, count) {
  let start = arr.length - count;
  if (count > arr.length) {
    start = 0;
  }

  let result = [];
  for (let idx = start; idx < arr.length; idx++) {
    result.push(arr[idx]);
  }

  return result;
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
lastNOf(digits, 6);    // returns [4, 8, 15, 16, 23, 42]
