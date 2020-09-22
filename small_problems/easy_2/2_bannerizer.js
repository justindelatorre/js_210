/* Write a function that will take a short line of text, and write it to 
 * the console log within a box.
 */

function createBorder(length) {
  let border = '+-';
  for (let count = 0; count < length; count++) {
    border += '-';
  }
  border += '-+'

  return border;
}

function createPadding(length) {
  let padding = '| ';
  for (let count = 0; count < length; count++) {
    padding += ' ';
  }
  padding += ' |';

  return padding;
}

function createString(string) {
  return '| ' + string + ' |';
}

function logInBox(string) {
  let length = string.length;
  console.log(createBorder(length));
  console.log(createPadding(length));
  console.log(createString(string));
  console.log(createPadding(length));
  console.log(createBorder(length));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
