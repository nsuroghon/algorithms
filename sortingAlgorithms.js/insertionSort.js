// Insertion Sort

// [2, 8, 5, 3, 9, 4]

// Get value and compare it to all the values to its left

//  8 > 2. Do nothing

//  5 < 8. Swap

//  5 > 2. Do nothing

//  [2, 5, 8, 3, 9, 4]

//  3 < 8
//  3 < 5
//  3 > 2. Insert

// Logic: if > insert 

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        for(let j = i; j > 0; j--) {
            if(array[j] < array[j - 1]) {
                let temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
            } else break;
        }
    }

    return array;
}

console.log(insertionSort([2, 8, 5, 3, 9, 4]))