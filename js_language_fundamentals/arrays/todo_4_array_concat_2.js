/* The concat function from the previous exercise could only concatenate a 
 * maximum of two arrays. For this exercise, you are going to extend that 
 * functionality. Refactor the concat function to allow for the concatenation of 
 * two or more arrays or values.
 * 
 * Note: Rest parameters are held in an Array.
 */

function concat(array1, ...args) {
  let resultArr = [];

  for (let firstIdx = 0; firstIdx < array1.length; firstIdx++) {
    resultArr.push(array1[firstIdx]);
  }

  for (let argsIdx = 0; argsIdx < args.length; argsIdx) {
    let currentArg = args[argsIdx];
    if (Array.isArray(currentArg)) {
      for (let secondIdx = 0; secondIdx < currentArg.length; secondIdx++) {
        resultArr.push(currentArg[secondIdx]);
      }
    } else {
      resultArr.push(currentArg)
    }
  }

  return resultArr;
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
// concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
// concat([2, 3], 'four');                // [2, 3, "four"]

// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// newArray;                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// newArray;                              // [2, 3, { a: "two", b: 3 }]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
// obj;                                   // { a: "two", b: 3 }
