// Doubly Linked List with tail
const OneNode = function (value) {
  this.value = value;
  this.previous = null;
  this.next = null;
};

const LinkedList = function ( ) {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.prototype.insert = function (value) {
  let newNode = new OneNode(value);
  let current = this.head;
  if (!current && !this.tail) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    let temp = this.tail;
    temp.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
  this.length++;
};

LinkedList.prototype.remove = function (value) {
  let current = this.head;
  if (value === this.head.value) {
    this.head.next.previous = null;
    this.head = this.head.next;
  } else if (value === this.tail.value) {
    this.tail.previous.next = null;
    this.tail = this.tail.previous;
  } else {
    while (current.next) {
      if (current.value === value) {   
       current.previous.next = current.next;
       current.next.previous = current.previous;
      }
      current = current.next;
    }
  }
  this.length--;
};

let test = new LinkedList();
test.insert(4);
test.insert(4);
test.insert(2);
test.insert(5);
test.insert(2);

// Space Complexity: O(n)
const removeDups = (list) => {
  let current = list.head;

  let traversedNum = {};
  while (current) {
    if (traversedNum[current.value]) {
      list.remove(current.value)
    } else {
      traversedNum[current.value] = true;
    }
    current = current.next;
  }
  return list;
};

console.log('test:',removeDups(test));
