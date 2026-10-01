// Node creation
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
const root = new Node(10);
root.left = new Node(20);
root.left.left = new Node(30);
root.left.right = new Node(40);
root.right = new Node(50);
root.right.right = new Node(70);
function preorderTraversal(root) {
    if (root !== null) {
        console.log(root.data);
        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }
    return;
}
preorderTraversal(root);
export {};
//# sourceMappingURL=preorderTraversal.js.map