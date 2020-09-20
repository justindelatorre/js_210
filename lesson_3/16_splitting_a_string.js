// Write a function that takes two arguments:
//
// - a string to be split
// - a delimiter character

// Write a function that splits a given string by a given delimeter and logs each delimited group.

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let copy = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === delimiter) {
      console.log(copy);
      copy = '';
    } else if (delimiter === '') {
      console.log(string[idx]);
    } else {
      copy += string[idx];
    }
  }

  if (copy) {
    console.log(copy);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
