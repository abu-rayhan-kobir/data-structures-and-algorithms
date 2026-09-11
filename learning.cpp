# include <iostream>
// Create a Node class
class Node {
  public:
    int data;
    Node* next;
    Node (int data) {
      this -> data = data;
      this -> next = nullptr;
    }
};

// Create singly linked list
class SinglyLinkedList {
  private:
    Node* head;
    Node* tail;
  public:
    SinglyLinkedList () {
      this -> head = nullptr;
      this -> tail = nullptr;
    }
    int length ();
    void getData ();
    void pushFront (int data);
    void pushBack (int data);
    bool search (int data);
    void popFront ();
    void popBack ();
};

int SinglyLinkedList :: length () {
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

// Get data function
void SinglyLinkedList :: getData () {
  if (this -> head == nullptr) {
    std :: cout << "Empty" << std :: endl;
    return;
  } else {
    Node* temp = head;
    while (temp -> next != nullptr) {
      std :: cout << temp -> data << " --> ";
      temp = temp -> next;
    }
    std :: cout << temp -> data;
    return;
  }
}

// Push front function
void SinglyLinkedList :: pushFront (int data) {
  Node* newNode = new Node (data);
  if (this -> head == nullptr) {
    head = newNode;
    tail = newNode;
    return;
  } else {
    newNode -> next = head;
    head = newNode;
    return;
  }
}

void SinglyLinkedList :: pushBack (int data) {
  Node* newNode = new Node (data);
  if (this -> head == nullptr) {
    head = newNode;
    tail = newNode;
    return;
  } else {
    this -> tail -> next = newNode;
    this -> tail = newNode;
    return;
  }
}

bool SinglyLinkedList :: search (int data) {
  Node* temp = this -> head;
  bool flag = false;
  while (temp -> next != nullptr) {
    if (temp -> data == data) {
      return !flag;
    }
    temp = temp -> next;
  }
  if (temp -> data == data) {
    return !flag;
  } else {
    return flag;
  }
}

void SinglyLinkedList :: popFront () {
  if (this -> head == nullptr) {
    std :: cout << "Empty" << std :: endl;
    return;
  } else {
    Node* temp = this -> head;
    head = head -> next;
    temp -> next = nullptr;
    delete temp;
    return;
  }
}

void SinglyLinkedList :: popBack () {
  if (this -> head == nullptr) {
    std :: cout << "Empty" << std :: endl;
  } else {
    Node* temp = this -> head;
    while (temp -> next != tail) {
      temp = temp -> next;
    }
    temp -> next = nullptr;
    delete this -> tail;
    this -> tail = temp;
    return;
  }
}

int main () {
  SinglyLinkedList singlyLinkedList;
  singlyLinkedList.pushBack (40);
  singlyLinkedList.pushBack (50);
  singlyLinkedList.pushBack (60);
  singlyLinkedList.pushBack (70);
  singlyLinkedList.getData ();
  std :: cout << std :: endl;
  std :: cout << singlyLinkedList.search (550) << std :: endl;
  return 0;
}