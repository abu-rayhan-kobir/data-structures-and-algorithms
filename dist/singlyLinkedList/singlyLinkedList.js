class Node {
    next;
    data;
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class SinglyLinkedList {
    head;
    tail;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    showData() {
        if (this.head === null) {
            console.log("Empty");
            return;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                console.log(current.data);
                current = current.next;
            }
            console.log(current.data);
            return;
        }
    }
    insertionAtTheHead(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
    }
    insertionAtTheTail(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
    }
    deleteAtTheHead() {
        if (this.head === null) {
            console.log("Empty");
        }
        else {
            this.head = this.head.next;
            return;
        }
    }
}
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.insertionAtTheTail(10);
singlyLinkedList.insertionAtTheTail(20);
singlyLinkedList.insertionAtTheTail(30);
singlyLinkedList.showData();
singlyLinkedList.deleteAtTheHead();
singlyLinkedList.deleteAtTheHead();
singlyLinkedList.deleteAtTheHead();
singlyLinkedList.deleteAtTheHead();
console.log("----------------------------");
singlyLinkedList.showData();
export {};
