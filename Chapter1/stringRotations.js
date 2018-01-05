// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings,
// s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.
// 'waterbottle' is a rotation of 'erbottlewat')

// O(n)
const stringRotation = (s1, s2) => {
  let hashTable = {};
  for (let i = 0; i < s1.length; i++) {
    if (!hashTable[s1[i]]) {
      hashTable[s1[i]] = 1;
    } else {
      let total = hashTable[s1[i]];
      total++;
      hashTable[s1[i]] = total;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    if (hashTable[s2[j]]) {
      let count = hashTable[s2[j]];
      count--;
      hashTable[s2[j]] = count;

      if (count < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

// Test
stringRotation('waterbottle', 'erbottlewat')
