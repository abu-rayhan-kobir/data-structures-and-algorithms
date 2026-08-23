class Dequeue {
  constructor () {
    this.dequeue = [];
  }
  isEmpty () {
    return this.dequeue.length === 0;
  }
  insertAtTheFront (data) {
    this.dequeue.unshift(data);
    return;
  }
  deleteAtTheFront () {
    if (this.isEmpty()) {
      console.log("Dequeue is empty now!");
      return;
    } else {
      return this.dequeue.shift();
    }
  }
  insertAtTheRear (data) {
    this.dequeue.push(data);
    return;
  }
  deleteAtTheRear () {
    if (this.isEmpty()) {
      console.log("Dequeue is empty now!");
      return;
    } else {
      return this.dequeue.pop();
    }
  }
  front () {
    if (this.isEmpty()) {
      console.log("Dequeue is empty now!");
      return;
    } else {
      return this.dequeue.at(0);
    }
  }
  rear () {
    if (this.isEmpty()) {
      console.log("Dequeue is empty now!");
      return;
    } else {
      return this.dequeue.at(-1);
    }
  }
}

const dequeue = new Dequeue();
dequeue.insertAtTheFront(10);
dequeue.insertAtTheFront(20);
dequeue.insertAtTheRear(30);
dequeue.insertAtTheRear(40);
console.log(dequeue.deleteAtTheFront());
console.log(dequeue.deleteAtTheRear());
console.log(dequeue.front());
console.log(dequeue.rear());
console.log(dequeue.deleteAtTheFront());
console.log(dequeue.deleteAtTheRear());
console.log(dequeue.deleteAtTheRear());
console.log(dequeue.isEmpty());