// Selection Sort

// Some steps:
// Array has 2 sections. 
    // 1.Sorted 
    // 2.Unsorted
// Pointers
    // 1. Current Item
    // 2. Current Min

// 2 8 5 3 9 4 1

// Current Item = 2;

// Traverse through rest of array find min & replace with 2
// 1 8 5 3 9 4 2

// repeat....

// Big O: N squared


function selectionSort(array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[i]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(selectionSort([2, 8, 5, 3, 9, 4, 1]))