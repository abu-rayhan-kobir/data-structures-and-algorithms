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
      newNode.next = self.head
      self.head = newNode
      return
    founder = self.head
    while (founder.next != None):
      if (founder.data == existingData):
        temp = founder.next
        founder.next = newNode
        newNode.next = temp
        return
      founder = founder.next
    if (founder.data == existingData):
      founder.next = newNode
      newNode.next = None
      return
    print("Not Found!")
    return
  def deleteAtTheBeginning (self):
    if (self.head == None):
      print("Empty!")
      return
    self.head = self.head.next
    return
  def deleteAtTheEnd(self):
    if (self.head == None):
      print("Empty!")
      return
    temp = self.head
    prev = temp
    while (temp.next != None):
      prev = temp
      temp = temp.next
    if (prev.data == temp.data):
      self.head = None
      return
    prev.next = None
    return
  def deleteInTheMiddle(self, existingData):
    if (self.head == None):
      print("Empty!")
      return
    temp = self.head
    prev = temp
    while (temp.next != None):
      if (prev.data == temp.data == existingData):
        self.head = self.head.next
        return
      if (temp.data == existingData):
        prev.next = temp.next
        return
      prev = temp
      temp = temp.next
    if (temp.data == existingData):
      prev.next = None
      return
    else:
      print("Not Found!")
      return
singlyLinkedList = SinglyLinkedList()
singlyLinkedList.insertAtTheEnd(10)
singlyLinkedList.insertAtTheEnd(20)
singlyLinkedList.insertAtTheEnd(30)
singlyLinkedList.insertAtTheEnd(40)
singlyLinkedList.insertAtTheEnd(50)
singlyLinkedList.deleteInTheMiddle(50)
singlyLinkedList.deleteInTheMiddle(10)
singlyLinkedList.showData()
