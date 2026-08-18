class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  length () {
    let temp = this.head;
    let count = 0;
    while (temp.next !== null) {
      count++;
      temp = temp.next;
    }
    return ++count;
  }
  showData() {
    if (this.head === null) {
      console.log("Empty!");
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      process.stdout.write(`${temp.data} <--> `);
      temp = temp.next;
    }
    process.stdout.write(`${temp.data}`);
    return;
  }
  insertAtTheEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.prev = temp;
    return;
  }
  insertAtTheBeginning(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    return;
  }
  insertInTheMiddle(existingData, data) {
    const newNode = new Node(data);
    if (this.head === null) {
      console.log("Empty!");
    }
    let traverser = this.head;
    while (traverser.next !== null) {
      if (traverser.data === existingData) {
        newNode.next = traverser.next;
        traverser.next.prev = newNode;
        newNode.prev = traverser;
        traverser.next = newNode;
        return;
      }
      traverser = traverser.next;
    }
    if (traverser.data === existingData) {
      traverser.next = newNode;
      newNode.prev = traverser;
      return;
    }
    console.log("Not Found!");
    return;
  }
  deleteData (existingData) {
    if (this.head === null) {
      console.log("Empty!");
      return;
    }
    if (this.head.data === existingData) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.data === existingData) {
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        return;
      }
      temp = temp.next;
    }
    if (temp.data === existingData) {
      temp.prev.next = null;
      return;
    }
    console.log("Not Found!");
    return;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtTheEnd(10);
doublyLinkedList.insertAtTheEnd(20);
doublyLinkedList.insertAtTheEnd(30);
doublyLinkedList.insertAtTheEnd(40);
doublyLinkedList.insertInTheMiddle(30, 25);
doublyLinkedList.deleteData(10);
doublyLinkedList.deleteData(40);
doublyLinkedList.deleteData(30);
doublyLinkedList.deleteData(100);
console.log(doublyLinkedList.length());

doublyLinkedList.showData();
