class Queue {
  constructor () {
    this.queue = [];
  }
  enqueue (data) {
    this.queue.push(data);
    return;
  }
  dequeue () {
    if (this.queue.length === 0) {
      throw new Error ("Queue is empty now!");
    } else {
      return this.queue.shift();
    }
  }
  isEmpty () {
    if (this.queue.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  front () {
    if (this.queue.length === 0) {
      throw new Error ("Queue is empty now!");
    } else {
      return this.queue.at(0);
    }
  }
  rear () {
    if (this.queue.length === 0) {
      throw new Error ("Queue is empty now!");
    } else {
      return this.queue.at(-1);
    }
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
