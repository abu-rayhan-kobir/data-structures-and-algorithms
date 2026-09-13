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
  Node *head;
  Node *tail;

public:
  SinglyLinkedList();
  void showData ();
  void pushBack (int data);
  int size ();
  Node* middle ();
};

SinglyLinkedList :: SinglyLinkedList () {
  this -> head = nullptr;
  this -> tail = nullptr;
}

void SinglyLinkedList :: showData () {
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

int SinglyLinkedList :: size () {
  if (this -> head == nullptr && this -> tail == nullptr) {
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

Node* SinglyLinkedList :: middle () {
  int middleCount = this -> size () / 2;
  Node* temp = this -> head;
  for (int index = 0; index < middleCount; index++) {
    temp = temp -> next;
  }
  return temp;
}

int main () {
  SinglyLinkedList singlyLinkedList;
  singlyLinkedList.pushBack (10);
  singlyLinkedList.pushBack (20);
  singlyLinkedList.pushBack (30);
  singlyLinkedList.pushBack (40);
  singlyLinkedList.pushBack (50);
  singlyLinkedList.pushBack (60);
  singlyLinkedList.showData ();
  std :: cout << std :: endl;
  Node* middleNode = singlyLinkedList.middle ();
  std :: cout << middleNode -> data << std :: endl;
  return 0;
}