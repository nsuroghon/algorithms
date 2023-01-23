
// Step 1. Halve the arr till singles

// [6, 3, 1, 5, 2, 4, 8, 7]

// [6, 3, 1, 5] [2, 4, 8, 7]

// [6, 3] [1, 5] [2, 4] [8, 7]

// [6] [3] [1] [5] [2] [4] [8] [7]

// Step 2.
// Compare and sort

// [3, 6] [1, 5] [2, 4] [7,8]

    // 3 < 1 ?  
    // 6 < 5 ?
// [1, 3, 5, 6] [2, 7, 4, 8]



// Merge receives two already sorted arrays
const merge = (leftArr, rightArr) => {
    const output = [];
    const leftIndex = 0;
    const rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];


        if(leftEl < rightEl) {
            output.push(leftArr);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = array => {

    if(array.length === 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)

}

mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])