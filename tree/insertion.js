class Node {
  constructor (data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function inorderTraversal (root) {
  if (root !== null) {
    inorderTraversal (root.left);
    process.stdout.write (`${root.data} `);
    inorderTraversal (root.right);
  }
  return;
}

function insert (root, data) {
  if (root === null) {
    return new Node (data);
  } else if (root.data === data) {
    return root;
  } else if (root.data > data) {
    root.right = insert (root.right, data);
  } else {
    root.left = insert (root.left, data);
  }
  return root;
}

let root = insert (null, 20);
root = insert (root, 30);
root = insert (root, 40);
root = insert (root, 90);
root = insert (root, 79);
root = insert (root, 60);
root = insert (root, 98);
root = insert (root, 77);

inorderTraversal (root);