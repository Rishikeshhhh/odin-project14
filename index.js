import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

console.log('Size:', list.size()); // Size: 4
console.log('Head:', list.head().value); // Head: 5
console.log('Tail:', list.tail().value); // Tail: 30
console.log('At index 2:', list.at(2).value); // At index 2: 20

list.pop();
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log('Contains 10:', list.contains(10)); // Contains 10: true
console.log('Contains 30:', list.contains(30)); // Contains 30: false
console.log('Find 10:', list.find(10)); // Find 10: 1
console.log('Find 30:', list.find(30)); // Find 30: null

list.insertAt(15, 2);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

list.removeAt(2);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null
