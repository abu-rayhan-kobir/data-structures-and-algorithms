class Node  {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert (root, data) {
    if (root === null) {
      return Node (data);
    }
    if (root.data === data) {
      return root;
    }
    if (root.data > data) {
      root.left = this.insert (root.left, data);
    } else {
      root.right = this.insert (root.right, data);
    }
    return root;
  }
}

const root = Node (20);
root.left = Node (15);
root.right = Node (30);
root.left.left = Node (12);
root.left.right = Node (30);
