class Node {
  constructor (data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function preOrder (root) {
  if (root !== null) {
    process.stdout.write (`${root.data} `);
    preOrder(root.left);
    preOrder(root.right);
  }
}
 
const root = new Node (1);
root.left = new Node (3);
root.right = new Node (5);
root.left.left = new Node (2);
root.left.right = new Node (4);
root.right.right = new Node (8);


preOrder(root);