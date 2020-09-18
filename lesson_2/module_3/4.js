/*
We should make the same changes to the sum function so we can continue to use it from the average function. Since we've already written that functionality in average, we can just move it from there to sum. Move everything from average into sum, except for the final return statement. The sum function should return the total, and average should call the sum function with the same values, then divide the return value by the array length, and return it.
*/

function sum(arr) {
  let total = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    total += arr[idx];
  }

  return total;
}

function average(arr) {
  return (sum(arr)) / arr.length;
}
