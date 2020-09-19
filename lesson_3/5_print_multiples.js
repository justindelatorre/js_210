// Write a function logMultiples that takes one argument number. It should log
// all multiples of the argument between 0 and 100 (inclusive) that are also
// odd numbers. Log the values in descending order.
//
// You may assume that number is an integer between 0 and 100.
//
// TODO: 'Further Exploration'

function logMultiples (number) {
  for (let currentNumber = 100; currentNumber >= 0; currentNumber--) {
    if (currentNumber % number === 0 && currentNumber % 2 !== 0) {
      console.log(currentNumber);
    } 
  }
}

logMultiples(17);

logMultiples(21);
