/* Write a function named pop that accepts one argument: an Array. The function 
 * should remove the last element from the array and return it.
 */

function pop(array) {
  array.length = array.length - 1;
}

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]
