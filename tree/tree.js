class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node (10);
root.left = new Node (20);
root.left.left = new Node (30);
root.left.right = new Node (40);
root.right = new Node (50);
root.right.left = new Node (60);
root.right.right = new Node (70);

function preOrder (root) {
  if (root !== null) {
    process.stdout.write (`${root.data} `);
    preOrder (root.left);
    preOrder (root.right);
  }
  return;
}

function inorder (root) {
  if (root !== null) {
    inorder (root.left);
    process.stdout.write (`${root.data} `);
    inorder (root.right);
  }
  return;
}

function postOrder (root) {
  if (root !== null) {
    preOrder (root.left);
    preOrder (root.right);
    process.stdout.write (`${root.data} `);
  }
  return;
}

preOrder (root);
console.log ("\n");
inorder (root);
console.log ("\n");
postOrder (root);