function quickSort(array) {
    if(array.length === 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < pivot) {
            leftArr.push(array[i]);
        }
        else rightArr.push(array[i]);
    }

    if(leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if(leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        // which is if rightArr.length > 0
        return [pivot, ...quickSort(rightArr),];
    }
}

function quickSort2(array) {
    if(array.length === 1) {
        return array;
    }

    const pivot = array[array.length - 1] 
    const leftArr = []
    const rightArr = []


    for(const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }

    return [...quickSort2(leftArr), pivot, ...quickSort2(rightArr)]

}


// console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
// console.log(quickSort2([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
