class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Max root to leaf path sum
// Function should return the maximum sum of any root to
// leaf path within the tree.
const maxPathSum = (root) => {
    // node might not have two children and just one
    // so with that we are setting it to -infinity, so the other child node is always selected
    if(root === null) return -Infinity;
    // check if have a leaf
    if(root.left === null && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChildPathSum
}

// leaf -> node in binary tree with no children 
//     5
//    / \
// null null

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;
