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
    void getData ();
    void pushBack (int data);
    Node* middleNode ();
};

SinglyLinkedList :: SinglyLinkedList () {
  this -> head = nullptr;
  this -> tail = nullptr;
}

void SinglyLinkedList :: getData () {
  if (this -> head == nullptr && this -> tail == nullptr) {
    std :: cout << "Empty" << std :: endl;
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
    tail = newNode;
    return;
  }
}

Node* SinglyLinkedList :: middleNode () {
  Node* slow = this -> head;
  Node* fast = this -> head;
  while (fast != nullptr && fast -> next != nullptr) {
    slow = slow -> next;
    fast = fast -> next -> next;
  }
  return slow;
}

int main () {
  SinglyLinkedList singlyLinkedList;
  singlyLinkedList.pushBack (10);
  singlyLinkedList.pushBack (20);
  singlyLinkedList.pushBack (30);
  singlyLinkedList.pushBack (40);
  singlyLinkedList.pushBack (50);
  singlyLinkedList.pushBack (60);
  singlyLinkedList.getData ();
  std :: cout << std :: endl;
  Node* middleNode = singlyLinkedList.middleNode ();
  std :: cout << middleNode -> data << std :: endl;
  return 0;
}