// Leetcode RecursionI

// 1. Reverse Array
const reverseArr = (arr) => {
    if(arr.length <= 1) return arr;
    return reverseArr(arr.slice(1)) + arr[0]
}

console.log(reverseArr(["h","e","l","l","o"]));
console.log(reverseArr(["H","a","n","n","a","h"]));

// 2. Reverse String
const reverseString = (s) => {
    if(s.length <= 1) return s;
    return reverseString(s.substring(1)) + s.charAt(0)
}

console.log(reverseString("hello"));
console.log(reverseString("Hannah"));

// 3. Is a palindrome ?
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

// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes 
// (i.e., only nodes themselves may be changed.)

// const swapPairs = (head) => {
//     if(head.length === 0 || head.length === 1) return head;

//     // console.log(head.slice(0,2))
//     head.slice()
//     const temp = head[0];
//     head[0] = head[1]
//     head[1] = temp

//     return head;
    

// }

// console.log(swapPairs([1,2,3,4]))
// console.log(swapPairs([]))
// console.log(swapPairs([1]))



