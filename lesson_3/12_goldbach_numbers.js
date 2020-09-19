// Write a function named checkGoldbach that uses Goldbach's 
// Conjecture to log every pair of primes that sum to the 
// number supplied as an argument. The conjecture states that 
// "you can express every even integer greater than 2 as the 
// sum of two primes". The function takes as its only 
// parameter, an integer expectedSum, and logs all 
// combinations of two prime numbers whose sum is 
// expectedSum. Log the prime pairs with the smaller number 
// first. If expectedSum is odd or less than 4, your function 
// should log null.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber++) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(expectedSum) {
  // Loop through all numbers from 2 to argument, exclusive
  for (let outerIndex = 2; outerIndex < expectedSum; outerIndex++) {
    // Loop through all numbers from 2 to argument, exclusive
    for (let innerIndex = 2; innerIndex < expectedSum; innerIndex++) {
      if ((isPrime(innerIndex)) &&
          (isPrime(outerIndex)) && 
          (innerIndex + outerIndex === expectedSum) && 
          (innerIndex >= outerIndex)) {
        console.log(outerIndex + ' ' + innerIndex);
      } else if (expectedSum % 2 !== 0 || expectedSum < 4) {
        console.log(null);
      }
    } 
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
