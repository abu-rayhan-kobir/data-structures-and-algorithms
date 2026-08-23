class Stack {
  constructor () {
    this.stack = [];
  }
  push (data) {
    this.stack.push(data);
    return;
  }
  isEmpty () {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  pop () {
    if (this.stack.length === 0) {
      throw new Error ("Stack is empty now!");
    } else {
      return this.stack.pop();
    }
  }
  peek () {
    if (this.stack.length === 0) {
      throw new Error ("Stack is empty now!");
    } else {
      return this.stack.at(-1);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());