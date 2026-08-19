class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  length () {
    if (this.head === null && this.tail === null) {
      return 0;
    } else {
      let count = 0;
      let temp = this.head;
      while (temp.next !== this.head) {
        count++;
        temp = temp.next;
      }
      return ++count;
    }
  }
  showData () {
    if (this.head === null && this.tail === null) {
      console.log("Empty!");
      return;
    }
    process.stdout.write(`${this.head.data} --> `);
    let temp = this.head.next;
    while (temp.next !== this.head) {
      process.stdout.write(`${temp.data} --> `);
      temp = temp.next;
    }
    process.stdout.write(`${temp.data}`);
    return;
  }
  insertAtTheBeginning (data) {
    const newNode = new Node (data);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
  }
  insertAtTheTail (data) {
    const newNode = new Node (data);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  deleteAtTheBeginning () {
    if (this.head === null && this.tail === null) {
      console.log("Empty!");
      return;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
      return;
    }
  }
  deleteAtTheTail () {
    if (this.head === null && this.tail === null) {
      console.log("Empty!");
      return;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      this.tail = prev;
      this.tail.next = this.head;
      return;
    }
  }
}

const circularSinglyLinkedList = new CircularSinglyLinkedList();
circularSinglyLinkedList.insertAtTheBeginning(10);
circularSinglyLinkedList.insertAtTheBeginning(20);
circularSinglyLinkedList.insertAtTheBeginning(30);
circularSinglyLinkedList.insertAtTheBeginning(40);
circularSinglyLinkedList.insertAtTheTail(50);
circularSinglyLinkedList.insertAtTheTail(60);
circularSinglyLinkedList.deleteAtTheBeginning();
circularSinglyLinkedList.deleteAtTheTail();
console.log(circularSinglyLinkedList.length());
circularSinglyLinkedList.showData();