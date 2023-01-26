const countDownFrom = (num) => {
    if(num === 0) return;
    console.log(num)
    countDownFrom(num - 1);
}

// solutions https://dev.to/codeguppy/practice-recursion-in-javascript-with-these-8-coding-challenges-for-beginners-25bm

// Calculate the sum of natural number up to n

var sum = addTo(10);
console.log(sum);

function addTo(n)
{
    if (n == 0)
        return 0;

    return n + addTo(n - 1);
}

// Calculate factorial of n. Reminder n! = 1 * 2 * ... * n

function factorial(n) {
    if(n === 1 || n === 0) {
        return 1;
    }

    return n * factorial(n -1);
}

console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(20));

// Calculate the value of n to the m power

// Find the nth Fibonacci number

// Calculate the sum of elements of an array of numbers

// Sort an array of numbers using bubble sort algorithm

// Find a number in a sorted array (binary search)

// Find the maximum number in an array containing numbers or other arrays of numbers

countDownFrom(5);
console.log(countDownFrom(5))