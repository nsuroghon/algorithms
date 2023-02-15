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
// Recursive function that configures the arguments
function confArgs(args) {
    // base case, args will have a length of 1
    if(args.length <= 1) return args;

    // call helper function on first 2 arrays in arguments

    // remove the first

    // set the 2nd to the result array of helper function

    
}
// Second function
// Helper to get the symmetric difference of two arrays
function diff(first, second) {

    const newFirst = first.filter( num => !second.includes(num))
    const newSecond = second.filter( num => !first.includes(num))
    const result = [...newFirst, ...newSecond]

    console.log(result)
    return result;
}

console.log(diff([1, 2, 3], [5, 2, 1, 4]))

// function sym(...args) {

//     const result = []
    
//     const first = args[0]
//     const first = args[1]

//     for(let i = 0; i < first.length; i++) {
//         const firstEl = first[i]

//         if(!second.includes(firstEl)) result.push(firstEl)
//     }

//     for(let i = 0; i < second.length; i++) {
//         const secondEl = second[i]

//     }
//         if(!first.includes(secondEl)) result.push(secondEl)

//     return result;   
// }


  
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
