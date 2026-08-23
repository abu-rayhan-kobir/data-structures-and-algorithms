class CircularQueue {
  constructor (size) {
    this.size = size;
    this.circularQueue = new Array(size).fill(null);
    this.front = -1;
    this.rear = -1;
  }
  enqueue (data) {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Dequeue is full now!");
    } else if (this.front === -1) {
      this.front = this.rear = 0;
      this.circularQueue[this.rear] = data;
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.circularQueue[this.rear] = data;
    }
  }
  dequeue () {
    if (this.front === -1) {
      console.log("Dequeue is empty now!");
    } else if (this.front === this.rear) {
      this.front = this.rear = -1;
      console.log(this.circularQueue[this.front]);
    } else {
      console.log(this.circularQueue[this.front]);
      this.front = (this.front + 1) % this.size;
    }
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.enqueue(60);
circularQueue.enqueue(70);
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()