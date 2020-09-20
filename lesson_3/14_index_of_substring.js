// Write two functions that each take two strings as arguments. Their expected 
// behaviors are as follows:
//
// - The indexOf function searches for the first instance of a substring in
// firstString that matches the string secondString, and returns the index of
// the character where that substring begins.
//
// - The lastIndexOf function searches for the last instance of a substring in
// firstString that matches the string secondString, and returns the index of
// the character where that substring begins.
//
// - Both functions return -1 if firstString does not contain the substring
// specified by secondString.

function indexOf(firstString, secondString) {
  let index = -1;
  let firstLength = firstString.length;
  for (let firstIdx = 0; firstIdx < firstLength; firstIdx++) {
    if (firstString[firstIdx] === secondString[0]) {
      let startIdx = firstIdx;
      let secondLength = secondString.length;
      let substrLength = 0;
      for (let secondIdx = 0; secondIdx < secondLength; secondIdx++) {
        if (firstString[firstIdx + secondIdx] === secondString[secondIdx]) {
          substrLength++;
        }
      }
      if (substrLength === secondLength) {
        return firstIdx;
      }
    }
  }

  return index;
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

function lastIndexOf(firstString, secondString) {
  let index = -1;
  let firstLength = firstString.length;
  for (let firstIdx = 0; firstIdx < firstLength; firstIdx++) {
    if (firstString[firstIdx] === secondString[0]) {
      let startIdx = firstIdx;
      let secondLength = secondString.length;
      let substrLength = 0;
      for (let secondIdx = 0; secondIdx < secondLength; secondIdx++) {
        if (firstString[firstIdx + secondIdx] === secondString[secondIdx]) {
          substrLength++;
        }
      }
      if (substrLength === secondLength) {
        index = firstIdx;
      }
    }
  }

  return index;
}

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
