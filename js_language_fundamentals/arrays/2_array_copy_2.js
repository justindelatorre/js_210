/* In the previous exercise, the value of the reference gets copied. For this 
 * exercise, only the values of the array should be copied, but not the reference. 
 * Implement two alternative ways of doing this.
 */

// Method 1: slice()
let myArray = [1, 2, 3, 4];
let myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// Method 2: Create a new array and add elements to it
myArray = [1, 2, 3, 4];
myOtherArray = [];

for (let idx = 0; idx < myArray.length; idx++) {
  myOtherArray.push(myArray[idx]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
