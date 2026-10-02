class Node {
  constructor (data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

const root = new Node (10);
root.left = new Node (8);
root.left.left = new Node (6);
root.left.right = new Node (9);
root.right = new Node (30);
root.right.left = new Node (25);
root.right.left.left = new Node (20);
root.right.right = new Node (40);
root.right.right.right = new Node (50);

function inorderTraversal (root) {
  if (root != null) {
    inorderTraversal (root.left);
    process.stdout.write (`${root.data} `);
    inorderTraversal (root.right);
  }
  return;
}

inorderTraversal (root);