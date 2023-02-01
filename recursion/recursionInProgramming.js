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
