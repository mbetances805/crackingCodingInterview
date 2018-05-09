// implement an algorithm to determine if a string has all unique characters.
// what if you cannot use additional data structures?

// with additional data structures
// Time Complexity: O(n)
// Space Complexity: O(n)
let string = 'tF f'

const isUnique = (str) => {
  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() in hashMap) {
      return false;
    } else {
      hashMap[str[i].toLowerCase()] = i;
    }
  }
  return true;
}

console.log(isUnique(string));

// Time Complexity: O(n)
// Space Complexity: O(n)
const isUnique2 = (str) => {
  let sortedStr = str.split('').sort().join('');

  for (let i = 0; i < sortedStr.length - 1; i++) {
    let pointer = i + 1;
    if (sortedStr[i].toLowerCase() === sortedStr[pointer].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isUnique2(string));


// Time Complexity: O(n)
// Space Complexity: O(1)
const isUnique3 = (str) => {
  if (str.length > 128) {
    return false;
  }
  let charSet = new Array(128);
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase()
    if (charSet[letter.charCodeAt(0)]) {
      return false;
    }
    charSet[letter.charCodeAt(0)] = true;
  }
  return true;
}

console.log(isUnique3(string));

// if cannot use additional data structures

// Time Complexity: O(n^2)
// Space Complexity: O(1)
const isUnique4 = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique4(string));
