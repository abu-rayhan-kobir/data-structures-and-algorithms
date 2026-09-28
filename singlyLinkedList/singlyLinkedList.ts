class Node {
  public next: Node | null;
  public data: number;
  public constructor (data: number) {
    this.next = null;
    this.data = data;
  }
}

class SinglyLinkedList {
  private head: Node | null;
  private tail: Node | null;
  public constructor () {
    this.head = null;
    this.tail = null;
  }
  public showData () {
    if (this.head === null) {
      console.log ("Empty");
      return;
    } else {
      let current = this.head;
      while (current.next !== null) {
        console.log (current.data);
        current = current.next;
      }
      console.log (current.data);
      return;
    }
  }
  public insertionAtTheHead (data: number) {
    const newNode = new Node (data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
  }
  public insertionAtTheTail (data: number) {
    const newNode = new Node (data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
      return;
    }
  }
  public deleteAtTheHead () {
    if (this.head === null) {
      console.log ("Empty");
    } else {
      this.head = this.head.next;
      return;
    }
  }
}