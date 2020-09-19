// Write a password guessing program that tracks how many times the user enters
// the wrong password. If the user enters the password wrong three times, log
// 'You have been denied access.' and terminate the program. If the password 
// is correct, log 'You have successfully logged in.' and end the program.

let password = 'password';

let attempts = 3;
let input;
while (attempts >= 0) {
  input = prompt('What is the password:');

  if (input == password) {
    console.log('You have successfully logged in.');
    break;
  }

  attempts--;

  if (attempts < 0) {
    console.log('You have been denied access.');
  }
}
