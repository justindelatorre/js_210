/* Write a function that counts the number of occurrences of each element 
 * in a given array. Once counted, log each element alongside the number 
 * of occurrences.
 */

function countOccurrences(array) {
  let counts = {};
  for (let idx = 0; idx < array.length; idx++) {
    if (Object.keys(counts).indexOf(array[idx]) === -1) {
      counts[array[idx]] = 1;
    } else {
      counts[array[idx]] += 1;
    }
  }

  for (name in counts) {
    console.log(`${name} => ${counts[name]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
