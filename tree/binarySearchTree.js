class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insert(root, data) {
  if (root === null) {
    return new Node(data);
  }
  if (root.data === data) {
    return root;
  }
  if (root.data > data) {
    root.left = insert(root.left, data);
  } else {
    root.right = insert(root.right, data);
  }
  return root;
}

function search (root, data) {
  if (root === null) {
    console.log ("Element Not Found!");
    return;
  }
  if (root.data === data) {
    console.log ("Element Found!");
    return;
  }
  if (root.data > data) {
    search (root.left, data);
  } else {
    search (root.right, data);
  }
}

let root = insert (null, 12);
root = insert (root, 40);
root = insert (root, 13);
root = insert (root, 19);
root = insert (root, 21);
root = insert (root, 25);
root = insert (root, 29);
root = insert (root, 9);
root = insert (root, 2);

function inorder(root) {
  if (root !== null) {
    inorder(root.left);
    process.stdout.write(`${root.data} `);
    inorder(root.right);
  }
  return;
}

inorder (root);
console.log ("\n");
search (root, 19);
search (root, 4);
