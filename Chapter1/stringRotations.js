// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings,
// s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.
// 'waterbottle' is a rotation of 'erbottlewat')

const stringRotation = (s1, s2) => {
  let hashTable = {};
  let rotation = 0;
  let s1Length = s1.length;

  if (s1Length !== s2.length && s1Length === 0) {
    return false;
  }

  for (let i = 0; i < s1Length; i++) {
    if (hashTable[s1[i]]) {
      let counter = hashTable[s1[i]];
      counter++;
      hashTable[s1[i]] = counter;
    } else {
      hashTable[s1[i]] = 1;
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] === 1) {
      rotation = s2.indexOf(key);
      break;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    let letter = s1[j];
    let newPosition = (j + rotation) % s1Length;
    if (s2[newPosition] !== letter) {
      return false;
    }
  }

  return true;
}

stringRotation('waterbottle', 'erbottlewat')
