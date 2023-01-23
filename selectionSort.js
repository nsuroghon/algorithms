function selectionSort(array) {
    let arr = array.slice();

    // Step 1. Find the lowest val
    // only go till arr.lenght - 1, because by the time we compare every other val
    // the largest will already be at the end

   for(let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Step 2. Compare min to rest of values
        // 
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
   }

   return arr
}


console.log(selectionSort([20,5,99, 400, 1, 25]))