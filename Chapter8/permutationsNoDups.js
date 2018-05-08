const stringPermutations = (str) => {
  let results = []
  getPermutations('', str, results)
  return results
}

const getPermutations = (prefix, suffix, results) => {
  if (suffix.length === 0) {
    results.push(prefix)
  }
  for (let i = 0; i < suffix.length; i++) {
    getPermutations(prefix + suffix[i], suffix.substring(0, i) + suffix.substring(i + 1), results)
  }
}

console.log(stringPermutations('abc'))
