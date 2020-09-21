/* In this exercise, you will implement your own version of the 
 * Array.prototype.reverse method. Your implementation should differ 
 * from the built-in method in the following two ways:
 * 
 * - It should accept either a string or an array as an argument.
 * - It should return a new string or array.
 */

function reverse(inputForReversal) {
  let output;

  if (Array.isArray(inputForReversal)) {
    output = [];
    for (let idx = inputForReversal.length - 1; idx >= 0; idx--) {
      output.push(inputForReversal[idx]);
    }
  } else {
    output = '';
    for (let idx = inputForReversal.length - 1; idx >= 0; idx--) {
      output += inputForReversal[idx];
    }
  }

  return output;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
