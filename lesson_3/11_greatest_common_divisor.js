// Create a function that computes the Greatest Common 
// Divisor of two positive integers.
//
// TODO: 'Further Exploration'

function gcd(firstNum, secondNum) {
  let largestDivisor;
  let smallerNum = firstNum < secondNum ? firstNum : secondNum; 
  for (let currentNum = 1; currentNum <= smallerNum; currentNum++) {
    if (firstNum % currentNum === 0 && secondNum % currentNum === 0) {
      largestDivisor = currentNum;
    }
  }

  return largestDivisor;
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
