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

function insert (root: Node | null, data: number) {
  if (root === null) {
    return new Node (data);
  } else if (root.data === data) {
    return root;
  } else if (root.data < data) {
    root.right = insert (root.right, data);
  } else {
    root.left = insert (root.left, data);
  }
  return root;
}

let root = insert (null, 10);
root = insert (root, 40);
root = insert (root, 50);
root = insert (root, 70);
root = insert (root, 21);
root = insert (root, 42);
root = insert (root, 8);
root = insert (root, 74);

function search (root: Node | null, data: number) {
  if (root === null) {
    console.log ("Element not found!");
  } else if (root.data === data) {
    console.log ("Element founded!");
  } else if (root.data < data) {
    search (root.right, data);
  } else {
    search (root.left, data);
  }
}

search (root, 10);
search (root, 44);
