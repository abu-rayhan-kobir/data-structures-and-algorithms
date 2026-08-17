class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class SinglyLinkedList {
  constructor (head = null) {
    this.head = head;
  }
  showData () {
    let temp = this.head;
    while (temp.next !== null) {
      process.stdout.write(`${temp.data} -> `);
      temp = temp.next;
    }
    process.stdout.write(`${temp.data}`);
  }
  insertionAtTheEnd (data) {
    const newNode = new Node (data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }
  insertionAtTheBeginning (data) {
    const newNode = new Node (data);
    const temp = this.head;
    this.head = newNode;
    newNode.next = temp;
  }
  insertionInTheMiddle (existingData, data) {
    const newNode = new Node(data);
    let finder = this.head;
    while (finder.next !== null) {
      if (finder.data === existingData) {
        let temp = finder.next;
        finder.next = newNode;
        newNode.next = temp;
        return;
      }
      finder = finder.next;
    }
    process.stdout.write("Data Not Found!");
  }
  deleteItem (existingData) {
    let temp = this.head;
    let prev = temp;
    if (temp.data === existingData) {
      this.head = this.head.next;
      return;
    }
    while (temp.next !== null) {
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
  }
}
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.insertionAtTheEnd(10);
singlyLinkedList.insertionAtTheEnd(20);
singlyLinkedList.insertionAtTheEnd(30);
singlyLinkedList.insertionAtTheEnd(40);
singlyLinkedList.insertionAtTheEnd(50);
singlyLinkedList.deleteItem(50);
singlyLinkedList.showData();