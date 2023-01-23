function diff(arr1, arr2) {
    const filteredArrays = 
    [ ...arr1.filter(el => !arr2.includes(el)),
      ...arr2.filter(el => !arr1.includes(el))
    ]
}

function sym(...args) {
    let arguments = [...args]
    console.log(arguments)
}

console.log(diff([1, 2, 3], [5, 2, 1, 4]))
console.log(sym([1, 2, 3], [5, 2, 1, 4]))