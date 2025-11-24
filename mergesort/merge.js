// merge.js
// Merge two sorted arrays and count iterations (number of loop steps)

export default function merge(left, right) {
  const out = [];
  let i = 0, j = 0;
  let iterations = 0;

  while (i < left.length && j < right.length) {
    iterations++; // one comparison/placement step
    if (left[i] <= right[j]) {
      out.push(left[i]);
      i++;
    } else {
      out.push(right[j]);
      j++;
    }
  }

  // copy remaining elements
  while (i < left.length) { iterations++; out.push(left[i]); i++; }
  while (j < right.length) { iterations++; out.push(right[j]); j++; }

  return { arr: out, iterations };
}

export { merge };
