import Node from './node.js';

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      return;
    }

    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let currentNode = this.headNode;
    while (currentNode !== null && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return null; // Index out of bounds
  }

  pop() {
    if (this.headNode === null) {
      return;
    }

    if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }

    let currentNode = this.headNode;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null; // Value not found
  }

  toString() {
    let string = '';
    let currentNode = this.headNode;
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += 'null';
    return string;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let currentIndex = 0;
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        const newNode = new Node(value, currentNode.nextNode);
        currentNode.nextNode = newNode;
        return;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
  }

  removeAt(index) {
    if (index === 0) {
      if (this.headNode !== null) {
        this.headNode = this.headNode.nextNode;
      }
      return;
    }

    let currentIndex = 0;
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentIndex === index - 1 && currentNode.nextNode !== null) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
  }
}

export default LinkedList;
