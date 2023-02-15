// Recursion in Programming - Full Course Solutions in Javascript

// 2. Reverse String
const reverseString = (s) => {
    if(s.length <= 1) return s;
    return reverseString(s.substring(1)) + s.charAt(0)
}

console.log(reverseString("hello"));
console.log(reverseString("Hannah"));

const isPalindrome = (str) => {
    if(str.length === 0 || str.length === 1) {
        return true;
    }

    const firstChar = str.charAt(0)
    const secondChar = str.charAt(str.length -1)

    if(firstChar === secondChar) {
        // return isPalindrome(str.slice(1, -1))
        return isPalindrome(str.substring(1, str.length - 1))
    }
    else return false;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome(""));
console.log(isPalindrome("level"));
console.log(isPalindrome("random"));

// 4. Decimal to Binary
// decimal base 10 values to binary
// formula: divide by 2, store remainder. Until reaching 0
// 233 ÷ 2 = 116 rem 1
// 116 ÷ 2 = 58 rem 0
// 58 ÷ 2 = 29 rem 0
// 29 ÷ 2 = 14 rem 1
// 14 ÷ 2 = 7 rem 0
// 7 ÷ 2 = 3 rem 1
// 3 ÷ 2 = 1 rem 1
// --> 1 ÷ 2 = 1//2 rem 0

const decimalToBinary = (decimal, result = "") => {
    // base case: end when decimal reaches 0
    if(Math.floor(decimal) === 0 || !decimal) return result;

    const remainder = decimal % 2
    result = result + remainder.toString()

    return decimalToBinary(Math.floor(decimal / 2), result);
}
console.log(decimalToBinary())
console.log(decimalToBinary(0))
console.log(decimalToBinary(1))
console.log(decimalToBinary(7))
console.log(decimalToBinary(233))


// SUM OF NATURAL NUMBERS - recursive summation
// num = 5
// return 1 + 2 + 3 + 4 + 5

const recursiveSummation = (inputValue, result = 0) => {
    if(inputValue === 0) return result;

    result += inputValue
    return recursiveSummation(inputValue - 1, result)
}

console.log(recursiveSummation(5))
console.log(recursiveSummation(10))

// Implement binary search algorithm to find the index of a target value in a sorted array
const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if(left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) {
        return mid;
    }
    if(target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } 
    return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([-1, 0, 1, 2, 3, 4, 7, 9, 10, 20], 10))


// 0, 1, 1, 2, 3, 5, 8, 13...

const fib = (n) => {
    if(n === 0 || n === 1) return n;

    let prev = 1;
    let curr = 1;

    for(let i = 2; i < n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr; 
}
console.log(fib(0))
console.log(fib(1))
console.log(fib(3))
console.log(fib(7));


// fibonacci sequence
// Fn = Fn-1 + Fn-2 
// F0 = 0 or F1 = 1  ie. for these 2 examples Fn = n
const fibonacci = (n) => {
    if(n === 0 || n === 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(5))
console.log(fibonacci(7))

// MERGE SORT:

// Will have a recursive function & a helper function

// helper
const merge = (left, right) => {
    console.log(left, right)
    const result = []

    for(let i = 0; i < left.length; i++) {
        // compare left (2) and right (8)
        // if left is smaller
        // push left into the array first
        // if left is larger
        // push right into array first
        if(left[i] < right[i]) {
            result.push(left[i]);
            result.push(right[i]);
        } else {
            result.push(right[i]);
            result.push(left[i]);
        }
    }

    return result;
}

// console.log(merge([2], [8]))
// console.log(merge([5], [3]))


// Recursive function, keep splitting the array in halves until result is arrays with 1 value
const mergeSort = (arr) => {

    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    console.log(mid);

    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    console.log(left)
    console.log(right)

    return merge(mergeSort(left), mergeSort(right))
}

// console.log(mergeSort([2,8,5,3]))
// console.log(mergeSort([1,4,2,8,345]))
console.log(mergeSort([1,4,2,8,43,2,1,92]))
// console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

