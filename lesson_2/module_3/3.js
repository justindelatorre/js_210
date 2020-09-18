/*
Create a variable named total with an initial value of 0 at the start of the average function. Use a for loop to iterate over all the elements in the array. With each iteration, add the element's value to the total. When the loop finishes, return the total divided by the array's length. Call average with an array of five numbers and log the result.
*/

function average(arr) {
  let total = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    total += arr[idx];
  }
  return total / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
