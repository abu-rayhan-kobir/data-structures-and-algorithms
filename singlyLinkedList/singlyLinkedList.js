class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  showData() {
    if (this.head === null) {
      console.log("Empty!");
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      process.stdout.write(`${temp.data} --> `);
      temp = temp.next;
    }
    console.log(`${temp.data}`);
  }
  length() {
    if (this.head === null) {
      return 0;
    }
    let count = 0;
    let temp = this.head;
    while (temp.next !== null) {
      count++;
      temp = temp.next;
    }
    return ++count;
  }

  insertAtTheHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  insertAtTheTail(data) {
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
    return;
  }

  insertAtTheMiddle(existingData, data) {
    if (this.head === null) {
      return;
    }
    let temp1 = this.head;
    const newNode = new Node(data);
    while (temp1.next !== null) {
      if (temp1.data === existingData) {
        let temp2 = temp1.next;
        temp1.next = newNode;
        newNode.next = temp2;
        return;
      }
      temp1 = temp1.next;
    }
    if (temp1.data === existingData) {
      temp1.next = newNode;
      return;
    }
    console.log("Not Found!");
    return;
  }
  deleteAtTheHead() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    this.head = this.head.next;
    return;
  }

  deleteAtTheTail() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next !== null) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    return;
  }
  deleteAtTheMiddle(existingData) {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null && this.head.data === existingData) {
      this.head = null;
      return;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next !== null) {
      if (temp === prev && temp.data === existingData) {
        this.head = this.head.next;
        return;
      }
      if (temp.data === existingData) {
        prev.next = temp.next;
        return;
      }
      prev = temp;
      temp = temp.next;
    }
    if (temp.data === existingData) {
      prev.next = null;
      return;
    }
    console.log("Not found!");
    return;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.insertAtTheTail(10);
singlyLinkedList.insertAtTheTail(20);
singlyLinkedList.insertAtTheTail(30);
singlyLinkedList.insertAtTheTail(40);
singlyLinkedList.insertAtTheTail(50);
singlyLinkedList.insertAtTheTail(60);
singlyLinkedList.showData();
singlyLinkedList.deleteAtTheMiddle(50);
singlyLinkedList.showData();
