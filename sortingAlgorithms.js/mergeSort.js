// Merge Sort

// Start with helper function
// Takes two SORTED array and merge together to create a third SORTED array
function helper(left, right, array) {
    // If left & Right are not already sorted this helper function will not work
    console.log(left);
    console.log(right);
    console.log(array);
    
    const result = [];

    const lengthLeft = left.length;
    const lengthRight = right.length;
    let i = 0;
    let j = 0;
    // let k = 0;

    while(i < lengthLeft || j < lengthRight){
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
        
        // k = k + 1
    }

    return result;
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
    console.log(mid)

    const left = array.slice(0,mid)
    console.log(left)
    const right = array.slice(mid)

    console.log(right)

    return mergeSort(left)

    // return merge(mergeSort(left), mergeSort(right))
}

function merge(array1, array2) {
    const result = []
    
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] < array2[i]) {
            result.push(array1[i])
            result.push(array2[i])
        } else {
            result.push(array2[i])
            result.push(array1[i])
        }
    }
    return result
}

console.log(merge([2],[8]))

// console.log(mergeSort([2,8,5,3,9,4,1,7]))
console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))