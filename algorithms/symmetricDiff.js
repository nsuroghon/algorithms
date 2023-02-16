// Recursively
// Args: [1, 2, 5], [2, 3, 5], [3, 4, 5]

// Take first two arguments
// [1, 2, 5], [2, 3, 5]

// Get symmetric diff. First △ Second
// remove first argument from args
// set second (now first) to the answer
// [1, 3]

// Retrieve answer and next argument
// (First △ Second) △ third
// [1, 3], [3, 4, 5]

// Get symmetric diff
// [5]

// but carry the first array, b/c it is our answer from all the previous element
// [1, 3, 5]

// One array left. args.lenth === 1
// return args



// Best approach
// First function 
// Can pass callback fn in reduce method
// Every time the method adds one value with the next, calls diff fn with the two values
// set removes duplicates

function sym(...args) {
    return [...new Set(args.reduce(diff))]
}
// Second function
// Helper to get the symmetric difference of two arrays
function diff(first, second) {
    const newFirst = first.filter( num => !second.includes(num))
    const newSecond = second.filter( num => !first.includes(num))
    return [...newFirst, ...newSecond]
}

console.log(diff([1, 2, 3], [5, 2, 1, 4]))

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
