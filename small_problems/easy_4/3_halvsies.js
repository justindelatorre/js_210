/* Write a function that takes an array as an argument, and returns an 
 * array that contains two elements, each of which is an array. Put the 
 * first half of the original array elements in the first element of the 
 * return value, and put the second half in the second element. If the 
 * original array contains an odd number of elements, place the middle 
 * element in the first half array.
 * 
 * NOTE: This solution is really expressive and succint, but might not
 * be as readable as it should be. It was mostly an experiment in using
 * Array.prototype.filter and arrow functions.
 */

function halvsies(array) {
  let firstHalf = array.filter(element => array.indexOf(element) < array.length / 2);
  let secondHalf = array.filter(element => array.indexOf(element) >= array.length / 2);

  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
