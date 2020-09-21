/* In this exercise, you will implement your own versions of the 
 * Array.prototype.shift and Array.prototype.unshift methods. These 
 * methods manipulate the contents of an array starting from the first 
 * index.
 * 
 * The shift method removes the first element from an array and returns
 * that element; if the array is empty, shift returns undefined. The
 * unshift method adds one or more elements to the start of an array
 * and returns the new length of the array. Both methods mutate the
 * original array.
 */

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let removedElement = arr[0];
  for (let idx = 0; idx < arr.length - 1; idx++) {
    arr[idx] = arr[idx + 1];
  }

  arr.length = arr.length - 1;

  return removedElement;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

function unshift(arr, ...args) {
  if (args.length === 0) {
    return arr.length;
  }

  arrCopy = arr.slice();
  arr.length = arr.length + args.length;

  for (let argsIdx = 0; argsIdx < args.length; argsIdx++) {
    arr[argsIdx] = args[argsIdx];
  }

  for (let remainingIdx = 0; remainingIdx < arrCopy.length; remainingIdx++) {
    arr[args.length + remainingIdx] = arrCopy[remainingIdx];  
  }

  return arr.length;
}

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
