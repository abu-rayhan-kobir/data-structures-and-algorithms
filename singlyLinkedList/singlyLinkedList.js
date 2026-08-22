class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
  }
  showData () {
    if (this.head === null) {
      print(`Emtpy!`);
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      process.stdout.write(`${temp.data} --> `);
      temp = temp.next;
    }
    console.log(`${temp.data}`);
    return;
  }
  length () {
    if (this.head === null) {
      return 0;
    }
    let count = 0;
    let temp = temp.next;
    while (temp.next !== null) {
      count++;
      temp = temp.next;
    }
    return ++count;
  }
  insertAtTheBeginning (data) {
    const newNode = new Node (data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
  insertAtTheEnd (data) {
    const newNode = new Node (data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = null;
    return;
  }
  insertAtTheMiddle (existingData, data) {
    const newNode = new Node (data);
    if (this.head === null) {
      console.log(`Empty!`);
      return;
    }
    if (this.head.data === existingData) {
      this.head.next = newNode;
      return;
    }
    let founder = this.head;
    while (founder.next !== null) {
      if (founder.data === existingData) {
        temp = founder.next;
        temp.next = newNode;
        newNode.next = temp;
        return;
      }
    }
    if (founder.data === existingData) {
      founder.next = newNode;
      newNode.next = null;
      return;
    }
    console.log(`Not Found!`);
    return;
  }
  deleteAtTheBeginning () {
    if (this.head === null) {
      console.log(`Empty!`);
      return;
    }
    this.head = null;
    return;
  }
  deleteAtTheEnd () {
    if (this.head === null) {
      console.log(`Empty!`);
      return;
    }
    let temp = this.head;
    let prev = temp;
    while (temp.next !== null) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    return;
  }
  deleteInTheMiddle (existingData) {
    if (this.head === null) {
      console.log(`Empty!`);
      return;
    }
    let temp = this.head;
    let prev = temp;
    while (temp.next !== null) {
      if (temp.data === prev.data && this.head.data === existingData) {
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
    console.log(`Not Found!`);
    return;
  }
}