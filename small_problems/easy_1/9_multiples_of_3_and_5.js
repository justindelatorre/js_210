ome other number, inclusive, that are multiples of 3 or 5. For 
 * instance, if the supplied number is 20, the result should be 98 (3 + 
 * 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 *
 * You may assume that the number passed in is an integer greater than 1.
 */

function multisum(end) {
  let sum = 0;
  for (let number = 1; number <= end; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }

  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
