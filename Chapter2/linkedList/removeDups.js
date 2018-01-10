// Write code to remove duplicates fron an unsorted linked list.
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

LinkedList.prototype.removeDups = function () {
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

let list = new LinkedList();
list.insert(2);
list.insert(7);
list.insert(8);
list.insert(7);
console.log(list.next)
list.removeDups();
