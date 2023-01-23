function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array;
}

console.log(bubbleSort([20,4,5,9,103,55]))