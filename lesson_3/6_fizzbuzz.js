// Write a function that iterates over the integers from 1 to 100, inclusive.
// For multiples of three, log "Fizz" to the console. For multiples of five,
// log "Buzz". For numbers which are multiples of both three and five, log
// "FizzBuzz". For all other numbers, log the number.
//
// TODO: 'Further Exploration'

function fizzbuzz() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log('FizzBuzz');
    } else if (currentNumber % 3 === 0) {
      console.log('Fizz');
    } else if (currentNumber % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(currentNumber);
    }
  }
}

fizzbuzz();
