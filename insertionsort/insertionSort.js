
export default function insertionSort(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Expected an array');

  let iterations = 0;
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    iterations++; 
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      iterations++; 
      arr[j + 1] = arr[j];
      j--;
    }
    
    iterations++;
    arr[j + 1] = key;
  }

  let sorted = true;
  for (let k = 1; k < n; k++) {
    iterations++; 
    if (arr[k - 1] > arr[k]) { sorted = false; break; }
  }

  return { arr, iterations, sorted };
}

export { insertionSort };
