class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

class SinglyLinkedList:
  def __init__(self):
    self.head = None

  def length (self):
    if (self.head == None):
      return 0
    count = 0
    temp = self.head
    while (temp.next != None):
     count += 1
     temp = temp.next
    return count + 1; 
  
  def showData (self):
    if (self.head == None):
      print("Empty!")
      return
    temp = self.head
    while (temp.next != None):
      print(f"{temp.data} --> ", end = "")
      temp = temp.next
    print(f"{temp.data}")
    return
  
  def insertAtTheBeginning (self, data):
    newNode = Node(data)
    if (self.head == None):
      self.head = newNode
      return
    newNode.next = self.head;
    self.head = newNode
    return
  
  def insertAtTheEnd (self, data):
    newNode = Node(data)
    if (self.head == None):
      self.head = newNode
      return
    temp = self.head
    while (temp.next != None):
      temp = temp.next
    temp.next = newNode
    newNode.next = None
    return

  def insertInTheMiddle (self, existingData, data):
    if (self.head == None):
      print("Empty!")
      return
    newNode = Node (data)
    if (self.head.data == existingData):
      self.head.next = newNode
      self.head = newNode
      return
    finder = self.head
    while (finder.next != None):
      if (finder.data == existingData):
        temp = finder.next
        finder.next = newNode
        newNode.next = temp
      finder = finder.next
    print("Not Found!")
    return

singlyLinkedList = SinglyLinkedList()
singlyLinkedList.insertAtTheBeginning(10)
singlyLinkedList.insertAtTheBeginning(20)
singlyLinkedList.insertAtTheBeginning(30)
singlyLinkedList.insertAtTheBeginning(40)
singlyLinkedList.insertAtTheEnd(50)
singlyLinkedList.insertAtTheEnd(60)
singlyLinkedList.insertAtTheEnd(70)
singlyLinkedList.insertInTheMiddle(40, 45)
singlyLinkedList.showData()
