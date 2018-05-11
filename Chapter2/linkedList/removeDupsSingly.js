// Write code to remove duplicates fron an unsorted linked list.
// Singly Linked List
function Node (value) {
  this.value = value;
  this.next = null;
}

function LinkedList () {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.insert = function (value) {
  let node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.length++;
    return this.head;
  }

  let current = this.head;

  while (current.next) {
    current = current.next;
  }

  current.next = node;
  this.length++;
  return node;
}

LinkedList.prototype.remove = function (value) {
  let current = this.head;
  let temp = null;

  if (current.value === value) {
    temp = current;
    this.head = temp.next;
    this.length--;
    return temp;
  }

  while (current.next && current.next.value !== value) {
    current = current.next;
  }

  if (current.next.value === value) {
    temp = current.next;
    current.next = temp.next;
    this.length--;
    return temp;
  }
  return new Error('Value is not in Linked List');
}
// First Solution
// Time Complexisty: O(n)
// Space Complexity: O(n)
LinkedList.prototype.removeDups1 = function () {
  let hashTable ={};
  let current = this.head;
  let temp = null;

  while (current) {
    if (!hashTable[current.value]) {
      hashTable[current.value] = 1;
    }

    if (hashTable[current.next.value]) {
      temp = current.next;
      current.next = temp.next;
      this.length--;
    }
    current = current.next;
  }
  return this;
}
// Second Solution without buffer
// Time Complexity = O(n^2) 
// Space Complexity: O(1)
LinkedList.prototype.removeDups2 = function (value) {
  let point1 = this.head;
  let temp =  null;

  while (point1) {
    let point2 = point1;
    while (point2.next){
      point2 = point2.next;
      if (point2.next !== null && point1.value === point2.next.value) {
        temp = point2.next;
        point2.next = temp.next;
        this.length--;
      }
    }
    point1 = point1.next;
  }
}

let list = new LinkedList();
list.insert(2);
list.insert(7);
list.insert(8);
list.insert(9);
list.insert(7);
console.log('1', list)
list.removeDups1();
list.removeDups2();
console.log('2', list)
