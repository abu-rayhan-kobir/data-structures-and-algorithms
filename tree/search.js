class Node {
  constructor (data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function insert (root, data) {
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

let root = insert (null, 20);
root = insert (root, 30);
root = insert (root, 40);
root = insert (root, 90);
root = insert (root, 79);
root = insert (root, 60);
root = insert (root, 98);
root = insert (root, 77);

function search (root, data) {
  if (root === null) {
    console.log ("Element Not Found!");
  } else if (root.data === data) {
    console.log ("Element Founded!");
  } else if (root.data > data) {
    insert (root.left, data);
  } else {
    insert (root.right, data);
  }
  return root;
}

search (root, 40);
search (root, 77);