import { DynamicArray } from './dynamicarray.js';

const darr = new DynamicArray(5);
console.log(`there are currently ${darr.size()} elements in the array`);

darr.add('Harry Potter');
darr.add('Ronald Weasley');
darr.add('Hermione Granger');

for (let i = 0; i < darr.size(); i++) {
  console.log(darr.get(i));
}

// add three more and force a grow
darr.add('Neville Longbottom');
darr.add('Fred Weasley');
darr.add('George Weasley');

console.log(`array now has a capacity of ${darr.capacity()}`);

// insert Cho Chang between Harry and Ron
darr.insert(1, 'Cho Chang');

for (let i = 0; i < darr.size(); i++) {
  console.log(darr.get(i));
}

// replace Cho with Ginny
darr.set(1, 'Ginny Weasley');

// remove the element at index 5
try {
  darr.remove(5);
} catch (e) {
  console.error('Remove failed:', e.message);
}

console.log('Final list:');
for (let i = 0; i < darr.size(); i++) {
  console.log(darr.get(i));
}
