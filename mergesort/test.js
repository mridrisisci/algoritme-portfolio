import mergeSort from './mergeSort.js';

function assert(cond, msg) {
  if (!cond) throw new Error('Assertion failed: ' + (msg || ''));
}

function runTests() {
  const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
  const res = mergeSort(list);
  console.log('Result:', res);
  assert(Array.isArray(res.arr), 'arr should be array');
  for (let i = 1; i < res.arr.length; i++) {
    assert(res.arr[i - 1] <= res.arr[i], 'array not sorted at index ' + i);
  }
  assert(res.sorted === true, 'sorted flag should be true');
  console.log('mergeSort passed basic test, iterations:', res.iterations);
}

try { runTests(); } catch (e) { console.error(e); }
