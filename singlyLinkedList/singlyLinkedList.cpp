#include <iostream>

class Node
{
public:
  int data;
  Node *next;
  Node(int data);
};

Node::Node(int data)
{
  this->data = data;
  this->next = nullptr;
}

class SinglyLinkedList
{
private:
  Node *head = nullptr;
  Node *tail = nullptr;

public:
  void getData();
  int size ();
  void pushFront (int data);
  void pushBack (int data);
  void pushMiddle (int possition, int data);
  int search (int data);
  void deleteFront ();
  void deleteBack ();
};

void SinglyLinkedList::getData()
{
  if (this->head == nullptr)
  {
    std::cout << "Empty" << std::endl;
    return;
  }
  else
  {
    Node* temp = this -> head;
    while (temp -> next != nullptr) {
      std :: cout << temp -> data << " --> ";
      temp = temp -> next;
    }
    std :: cout << temp -> next;
    return;
  }
}

int SinglyLinkedList :: size () {
  if (this -> head == nullptr) {
    return 0;
  } else {
    int count = 0;
    Node* temp = this -> head;
    while (temp -> next != nullptr) {
      count++;
      temp = temp -> next;
    }
    return ++count;
  }
}

void SinglyLinkedList :: pushFront (int data) {
  Node* newNode = new Node (data);
  if (this -> head == nullptr) {
    this -> head = this -> tail = newNode;
    return;
  } else {
    newNode -> next = this -> head;
    this -> head = newNode;
    return;
  }
}

void SinglyLinkedList :: pushBack (int data) {
  Node* newNode = new Node (data);
  if (this -> head == nullptr) {
    this -> head = this -> tail = newNode;
    return;
  } else {
    this -> tail -> next = newNode;
    tail = newNode;
    return;
  }
}

void SinglyLinkedList :: pushMiddle (int position, int data) {
  if (position < 0 || position > (this -> size ()) - 1) {
    std :: cout << "Invalid position" << std :: endl;
    return;
  }
  if (position == 0) {
    this -> pushFront (data);
  } else {
    Node* temp = this -> head;
    for (int index = 0; index < position - 1; index++) {
      temp = temp -> next;
    }
    Node* newNode = new Node (data);
    newNode -> next = temp -> next;
    temp -> next = newNode;
  }
}

int SinglyLinkedList :: search (int data) {
  Node* temp = this -> head;
  int index = 0;
  while (temp -> next != nullptr) {
    if (temp -> data == data) {
      return index;
    }
    index++;
    temp = temp -> next;
  }
  if (temp -> data == data) {
    return index;
  } else {
    return -1;
  }
}

void SinglyLinkedList :: deleteFront () {
  if (this -> head == nullptr) {
    std :: cout << "Empty" << std :: endl;
    return;
  } else {
    Node* temp = this -> head;
    this -> head = this -> head -> next;
    delete temp;
    return;
  }
}

void SinglyLinkedList :: deleteBack () {
  if (this -> head == nullptr) {
    std :: cout << "Empty" << std :: endl;
    return;
  } else {
    Node* temp = this -> head;
    while (temp -> next == this -> tail) {
      temp -> next = nullptr;
      delete this -> tail;
      this -> tail = temp;
    }
    return;
  }
}

int main () {
  SinglyLinkedList singlyLinkedList;
  singlyLinkedList.pushFront (10);
  singlyLinkedList.pushMiddle (0, 10);
  singlyLinkedList.pushMiddle (1, 10);
  singlyLinkedList.pushMiddle (2, 20);
  singlyLinkedList.getData ();
  return 0;
}



