/* Write a function named join that accepts two arguments: an Array and a 
 * String. The function should coerce each value in the Array to a String, and 
 * then join those values together using the second argument as a separator. 
 * You may assume that a separator will always be passed.
 * 
 * You can call the String function on any JavaScript value to get its String 
 * representation.
 */

function join(array, joinChar) {
  let result = '';
  for (let idx = 0; idx < array.length; idx++) {
    result += String(array[idx]);
    if (idx < array.length - 1) {
      result += joinChar;
    }
  }

  return result;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
