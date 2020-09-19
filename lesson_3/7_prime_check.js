// Write a function that takes a number argument, and returns // true if the number is prime, or false if it is not.
//
// You may assume that the input is always a non-negative
// integer.
//
// TODO: 'Further Exploration'

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

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
