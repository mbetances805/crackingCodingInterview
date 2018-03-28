const quickSort = (arr, left, right) => {
  let index = partition(arr, left, right)
  
  if (left < index - 1) {
    quickSort(arr, left, index - 1)
  }
  
  if (index < right) {
    quickSort(arr, index, right)
  }
  
  return arr
}

const swap = (arr, left, right) => {
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)]
  
  while (left <= right) {
    while(arr[left] < pivot) {
      left++
    }
    
    while(arr[right] > pivot) {
      right--
    }
    
    if (left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
  }
  
  return left
}

let test = [4,6,78,34,90,33,22,1,5,7]
console.log(quickSort(test, 0, test.length - 1))