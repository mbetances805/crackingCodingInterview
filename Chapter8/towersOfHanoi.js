const towersOfHanoi = (n, fromStack, toStack, auxStack) => {
  if (n === 1) {
    console.log('Move disk 1 from ' + fromStack + ' to ' + toStack)
    return
  }
  towersOfHanoi(n - 1, fromStack, auxStack, toStack)
  console.log('Move disk ' + n + ' from ' + fromStack + ' to ' + toStack)
  towersOfHanoi(n - 1, auxStack, toStack, fromStack)
}

towersOfHanoi(3, 'A', 'C', 'B')
