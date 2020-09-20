
n startsWith(string, searchString) {
  let strLen = searchString.length;
  for (let idx = 0; idx < strLen; idx++) {
    if (string[idx] !== searchString[idx]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
