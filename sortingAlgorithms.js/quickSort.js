// Quick Sort
//  = Pivot

// How to choose pivot
// Last value or

// Median of Three: method to find best pivot
// Get the
// First Value
// Middle Value
// Last Value
// Sort these three, middle is the pivot
// Assuming this value will be close to the median value of array

// 2,6,5,3,8,7,1,0

// Pivot = 5

// left = 2, 3, 1, 0  right = 6, 8, 7

// return [... quickSort([2, 3, 1, 0]), 5, quickSort([ 6, 8, 7]) ]

// repeat until sorted

function quickSort(array) {
    if(array.length <= 1) return array;

    // last value for pivot
    const pivot = array[array.length - 1]
    // middle value pivot
    // const pivot = array[Math.floor((array.length - 1) / 2)]

    const left = array.filter((int) => int < pivot)
    const right = array.filter((int) => int > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2,6,5,3,8,7,1,0]))