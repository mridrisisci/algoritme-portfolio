// mergeSort.js
// Recursive merge sort that uses external merge() function.
// Returns { arr, iterations, sorted }

import merge from './merge.js';

export default function mergeSort(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Expected an array');

  // count this call as one iteration
  let iterations = 1;

  // base case
  if (arr.length <= 1) {
    // already sorted
    return { arr: arr.slice(), iterations, sorted: true };
  }

  const mid = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, mid);
  const rightPart = arr.slice(mid);

  // recursive calls
  const leftRes = mergeSort(leftPart);
  const rightRes = mergeSort(rightPart);
  iterations += leftRes.iterations + rightRes.iterations;

  // merge the two sorted halves
  const merged = merge(leftRes.arr, rightRes.arr);
  iterations += merged.iterations;

  // verify sorted (simple linear check)
  let sorted = true;
  for (let k = 1; k < merged.arr.length; k++) {
    iterations++;
    if (merged.arr[k - 1] > merged.arr[k]) { sorted = false; break; }
  }

  return { arr: merged.arr, iterations, sorted };
}

export { mergeSort };
