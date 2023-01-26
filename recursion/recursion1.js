// Leetcode RecursionI

// reverseArr
const reverseArr = (arr) => {
    if(arr.length <= 1) return arr;
    return reverseArr(arr.slice(1)) + arr[0]
}

console.log(reverseArr(["h","e","l","l","o"]));
console.log(reverseArr(["H","a","n","n","a","h"]));

const reverseString = (s) => {
    if(s.length <= 1) return s;
    return reverseString(s.substring(1)) + s.charAt(0)
}

console.log(reverseString("hello"));
console.log(reverseString("Hannah"));