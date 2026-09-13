# include <iostream>

class Node {
  public:
    int data;
    Node* next;
    Node (int data);
};

Node :: Node (int data) {
  this -> data = data;
  this -> next = nullptr;
}

class SinglyLinkedList {
  private:
    Node* head;
    Node* tail;
  public:
    SinglyLinkedList ();
    void showData ();
    void pushBack (int data);
    Node* reverse ();
};

SinglyLinkedList :: SinglyLinkedList () {
  this -> head = nullptr;
  this -> tail = nullptr;
}

void SinglyLinkedList :: showData () {
  if (this -> head == nullptr && this -> tail == nullptr) {
    std :: cout << "Empty List" << std :: endl;
    return;
  } else {
    Node* temp = this -> head;
    while (temp -> next != nullptr) {
      std :: cout << temp -> data << " --> ";
      temp = temp -> next;
    }
    std :: cout << temp -> data;
    return;
  }
}

void SinglyLinkedList :: pushBack (int data) {
  Node* newNode = new Node (data);
  if (this -> head == nullptr && this -> tail == nullptr) {
    this -> head = this -> tail = newNode;
    return;
  } else {
    this -> tail -> next = newNode;
    this -> tail = newNode;
    return;
  }
}

Node* SinglyLinkedList :: reverse () {
  Node* previous = nullptr;
  Node* current = this -> head;
  Node* next = nullptr;
  while (current != nullptr) {
    next = current -> next;
    current -> next = previous;
    previous = current;
    current = next;
  }
  this -> head = previous;
  return this -> head;
}

int main () {
  SinglyLinkedList singlyLinkedList;
  singlyLinkedList.pushBack (10);
  singlyLinkedList.pushBack (20);
  singlyLinkedList.pushBack (30);
  singlyLinkedList.pushBack (40);
  singlyLinkedList.pushBack (50);
  singlyLinkedList.showData ();
  std :: cout << std :: endl;
  singlyLinkedList.reverse ();
  singlyLinkedList.showData ();
  return 0;
}