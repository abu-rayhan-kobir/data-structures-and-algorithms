

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

const root: Node = new Node (10);
root.left = new Node (20);
root.left.left = new Node (30);
root.left.right = new Node (40);
root.right = new Node (50);
root.right.left = new Node (70);
root.right.right = new Node (60);

function postorderTraversal (root: Node | null) {
  if (root !== null) {
    postorderTraversal (root.left);
    postorderTraversal (root.right);
    console.log (root.data);
  }
  return;
}

postorderTraversal (root);