/* Write a function that creates and returns a new array from its array argument. The 
 * new array should contain all values from the argument array whose positions have 
 * an odd index.
 */

function oddElementsOf(arr) {
  let oddElements = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 1) {
      oddElements.push(arr[idx]);
    }
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]
