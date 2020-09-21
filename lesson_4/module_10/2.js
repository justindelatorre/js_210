/* Write a function that takes an array argument and returns a new array that 
 * contains all the argument's elements in their original order followed by all the 
 * argument's elements in reverse order.
 */

function originalAndReversed(arr) {
  let reversed = [];
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    reversed.push(arr[idx]);
  }

  return arr.concat(reversed);
}

originalAndReversed([1, 2, 3]) // return [1, 2, 3, 3, 2, 1]
