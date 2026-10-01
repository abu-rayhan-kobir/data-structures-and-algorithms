console.clear();
class Node {
    left;
    right;
    data;
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
function inorderTraversal(root) {
    if (root !== null) {
        inorderTraversal(root.left);
        process.stdout.write(`${root.data} `);
        inorderTraversal(root.right);
    }
    return;
}
function insert(root, data) {
    if (root === null) {
        return new Node(data);
    }
    else if (root.data === data) {
        return root;
    }
    else if (root.data > data) {
        root.left = insert(root.left, data);
    }
    else {
        root.right = insert(root.right, data);
    }
    return root;
}
function search(root, data) {
    if (root === null) {
        console.log("Element not found!");
    }
    else if (root.data === data) {
        console.log("Element found!");
    }
    else if (root.data > data) {
        search(root.left, data);
    }
    else {
        search(root.right, data);
    }
}
let root = insert(null, 20);
root = insert(root, 15);
root = insert(root, 30);
root = insert(root, 12);
root = insert(root, 18);
root = insert(root, 25);
root = insert(root, 50);
inorderTraversal(root);
console.log("\n");
search(root, 18);
search(root, 100);
export {};
//# sourceMappingURL=test.js.map