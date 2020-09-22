/* Write a function named copyProperties that takes two Objects as arguments. 
 * The function should copy all properties from the first object to the second. 
 * The function should return the number of properties copied.
 */

function copyProperties(firstObj, secondObj) {
  for (let property in firstObj) {
    secondObj[property] = firstObj[property]; 
  }

  return Object.keys(secondObj).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
