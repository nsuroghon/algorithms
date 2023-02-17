// Bubble Sort

// Bubble - groups 2 consecutive numbers and sorts them
// each iteration - moves largest number to the end

// 2 8 5 3 9 4 1
// 2 5 3 8 4 1 9

// kept comparing 8 and moving it one slot over until it meets the 9
// 9 continues all the way to end - b/c it is largest


function swap(a, b) {
    console.log(a, b)

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    return [a, b];
}

console.log(swap(10,5))

function bubbleSort(array) {
    for(let i = 0; i < array.length - 1 ; i++) {

        for(let j = 0; j < array.length - 1 - i; j++) {

            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            
        }
    }

    return array;
}


console.log(bubbleSort([2,8,5,3,9,4,1]))
