class Node {
  public left: Node | null;
  public right: Node | null;
  public data: number;
  public constructor (data: number) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function inorderTraversal (root: Node | null) {
  if (root !== null) {
    inorderTraversal (root.left);
    process.stdout.write (`${root.data} `);
    inorderTraversal (root.right);
  }
  return;
}

function insert (root: Node | null, data: number) {
  if (root === null) {
    return new Node (data);
  } else if (root.data === data) {
    return root;
  } else if (root.data > data) {
    root.left = insert (root.left, data);
  } else {
    root.right = insert (root.right, data);
  }
  return root;
}

let root = insert (null, 12);
root = insert (root, 30);
root = insert (root, 40);
root = insert (root, 22);
root = insert (root, 80);
root = insert (root, 31);
root = insert (root, 55);

inorderTraversal (root);