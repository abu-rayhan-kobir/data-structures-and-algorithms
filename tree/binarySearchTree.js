class Node  {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert (root, data) {
    if (root === null) {
      return new Node (data);
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

const root = new Node (20);
root.left = new Node (15);
root.right = new Node (30);
root.left.left = new Node (12);
root.left.right = new Node (30);
