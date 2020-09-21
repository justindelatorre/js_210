/* Create a function named rollCall that takes an array of first names as an 
 * argument and logs all the names to the console, one name per line. You 
 * should log the names in the same sequence that they appear in the array. Use 
 * a for loop to process the array.
 */

function rollCall(nameArray) {
  for (let idx = 0; idx < nameArray.length; idx++) {
    console.log(nameArray[idx]);
  }
}

rollCall(['Alice', 'Bob', 'Charlotte']);
