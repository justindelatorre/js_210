/* Write a function that returns a string of all the values in an array with no 
 * intervening content. For example, your function should return '1a4' if the 
 * argument is [1, 'a', 4]. Use a for loop to process the array elements in 
 * sequence, and coerce each value in the array to a String before 
 * concatenating it to the result string.
 */

function arrayToString(array) {
  let result = '';
  for (let idx = 0; idx < array.length; idx++) {
    result += array[idx];
  }

  return result;
}

arrayToString(['a', 'b', 'c']);
arrayToString([1, 2, 3]);
