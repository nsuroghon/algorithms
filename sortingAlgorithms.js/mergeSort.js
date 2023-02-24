// Merge Sort

// Start with helper function
// Takes two SORTED array and merge together to create a third SORTED array
function helper(left, right, array) {
    // If left & Right are not already sorted this helper function will not work
    
    const result = [];

    const lengthLeft = left.length;
    const lengthRight = right.length;
    let i = 0;
    let j = 0;

    while(i < lengthLeft && j < lengthRight){
        console.log(left[i], right[i])
        // comparing smallest unpicked in Left with smallest unpicked in Right
        if(left[i] <= right[j]) {
            result.push(left[i]);
            i = i + 1;
        }
        else {
            result.push(right[j]);
            j = j + 1;
        }
    }

    // While statement iterates while leftIndex & rightIndex are both less than length, but when one side reaches first
    // in this case the last two & largest two elements on right array are [7,8]
    // ...right.slice(j) gets the last elements 7,8 and we include those in the end of our return statement array
    console.log(...result);
    console.log(...left.slice(i))
    console.log(...right.slice(j))

    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(helper([1,2,4,6], [3,5,7,8], [2,4,1,6,8,5,3,7]))


// Merge Sort

// [2, 8, 5, 3, 9, 4, 1, 7]

// Recursive function so it runs the full thing on left
// before it gets to right

// [2, 8, 5, 3] 

// [2], [8], [5], [3]

// helper function merge(array1, array2)
// compare array1[i] with array2[i] and swap

// [2,8] [3,5]

// [2, 3, 5, 8]

// ...repeat on other side

function mergeSort(array) {
    console.log(array)
    if(array.length <= 1) return array;

    const mid = Math.floor((array.length) / 2)

    const left = array.slice(0,mid)
    console.log(left)
    const right = array.slice(mid)
    console.log(right)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

    const result = [];

    let i = 0;
    let j = 0;
    
    // while there are still unpicked elements in left OR right
    while(i < left.length && j < right.length) {
        // compare first unpicked in left with first unpicked in right
        // ... push the lowest of the two elements
        // & increment pointer at given side
        if(left[i] <= right[j]) {
            result.push(left[i]);
            i += 1;
        }
        else {
            result.push(right[j]);
            j += 1;
        }
    }

    console.log(...result);
    console.log(...left.slice(i))
    console.log(...right.slice(j))
    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(merge([1,4], [2,8]))
// console.log(merge([1,2,4,6], [3,5,7,8]))


// console.log(mergeSort([2,8,5,3,9,4,1,7]))
// console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))