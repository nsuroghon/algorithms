class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Find sum of all values in tree
// Depth First alg - Iterative
const treeSumIterative = (root) => {
    if(root === null) return 0;

    let sum = 0;
    const stack = [ root ];

    while(stack.length > 0) {
        const current = stack.pop();
        sum += current.val;

        if(current.left) stack.push(current.left)
        if(current.right) stack.push(current.right)
    }

    return sum;
}

// Depth First - Recursive method
const treeSumRecursive = (root) => {
    if(root === null) return 0;
    
    return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

const findMin = (root) => {
    if(root === null) return null;

    let min = null;
    const stack = [ root ];
    
    while(stack.length > 0) {
        const current = stack.pop();
        
        if(!min || current.val < min) {
            min = current.val
        }

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return min;
}

const findMinRecursive = (root) => {
    if(root === null) return null;

    const leftMin = findMinRecursive(root.left)
    const rightMin = findMinRecursive(root.right)

    return Math.min(root.val, leftMin, rightMin)
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f

// console.log(treeIncludes(a, "e"))

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

console.log(treeSumIterative(a))
console.log(treeSumRecursive(a))
console.log(findMin(a))
console.log(findMinRecursive(a))
