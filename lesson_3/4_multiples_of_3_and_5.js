// Write a function that logs the integers from 1 to 100 (inclusive) that are
// multiples of either 3 or 5. If the number is divisible by both 3 and 5, 
// append an "!" to the number.
//
// TODO: 'Further Exploration'

function multiplesOfThreeAndFive() {
  for (let currentNum = 1; currentNum <= 100; currentNum++) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log(currentNum + '!');
    } else if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      console.log(currentNum)
    } else {
      continue;
    }
  }
}

multiplesOfThreeAndFive();
