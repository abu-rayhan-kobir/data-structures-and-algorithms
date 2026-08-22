class Stack {
  constructor () {
    this.stack = [];
  }
  length () {
    return this.stack.length;
  }
  push (data) {
    this.stack.unshift(data);
    return;
  }
  pop () {
   return this.stack.shift();
  }
  isEmpty () {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  peek () {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    } else {
      return this.stack.at(0);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
if (stack.isEmpty()) {
  console.log("Empty Stack!");
} else {
  console.log(stack.length());
}