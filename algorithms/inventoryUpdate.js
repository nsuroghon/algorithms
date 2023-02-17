// Compare and update the inventory stored in a 2D array against a second 2D array 
// of a fresh delivery. Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.


// pseudo code:
// traverse through new inv
// for each item
// 1. exists in current
    // update inventory
// 2. doesn't exist
    // add to current inv

// function updateInventory(curInv, newInv) {

//     for(let i = 0; i < newInv.length; i++) {
//         const newItem = newInv[i]

//         for(let j = 0; j < curInv.length; j++) {
//             const curItem = curInv[j]

//             // If item exists, but inventory numbers do not match
//             // Update Inventory
//             if(curItem[1] === newItem[1] && curItem[0] !== newItem[0]) {
//                 curItem[0] = newItem[0]
//             }

//         }


//     }

//     return curInv;
// }


// pseudo code
// traverse through current inventory and create a new object storing inventory
// traverse through new inventory items
// for each item
// if exists
    // and inventory numbers (key) are NOT equal
    // replace key with new key
// if item doesn't exist in current inventory
// Add new item to inventory object
function updateInventory(currentInv, newInv) {
    const store = createStore(currentInv)
    const result = []

    for(let i = 0; i < newInv.length; i++) {
        const itemName = newInv[i][1];
        const itemAmount = newInv[i][0];

        // if exists && amount is not equal
        if(store[itemName]) {
            result.push(itemName, store[itemName] += itemAmount )
            // console.log(store[itemName] += itemAmount)
        }
        // if doesn't exist
        if(!store[itemName]) {
            result.push([itemName, itemAmount])
            store[itemName] = itemAmount
        }

    }

    // return store;
    return [...result];
}

function createStore(arr) {
    const store = {}

    for(el of arr) {
        store[el[1]] = el[0]
    }

    return store;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))