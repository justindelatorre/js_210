// Write a function that takes a string as an argument, and 
// returns the string stripped of spaces from both ends. Do 
// not remove or alter internal spaces.

function trimFromLeft(someString) {
  let length = someString.length;
  let copy = '';

  let inCopyMode = false;
  for (let idx = 0; idx < length; idx++) {
    if (someString[idx] !== ' ') {
      inCopyMode = true;
    }

    if (inCopyMode) {
      copy += someString[idx];
    }
  }

  return copy;
}

function trimFromRight(someString) {
  let length = someString.length;

  let countSpaces = 0;
  let inCopyMode = false;
  for (let idx = length - 1; idx >= 0; idx--) {
    if (someString[idx] !== ' ') {
      inCopyMode = true;
    }

    if (inCopyMode) {
      break;
    } else {
      countSpaces++;
    }
  }

  let copy = ''
  for (idx = 0; idx < length - countSpaces; idx++) {
    copy += someString[idx];
  }

  return copy;
}

function trim(someString) {
  let trimLeftCopy = trimFromLeft(someString);
  return trimFromRight(trimLeftCopy);
}

trim('  abc  ') === "abc";
trim('abc   ') === "abc";
trim(' ab c') === "ab c";
trim(' a b  c') === "a b  c";
trim('      ') === "";
trim('') === "";
