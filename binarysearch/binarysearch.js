// Minimal, correct binary search implementation.
export function binarySearch(searchFor, values) {
    if (!Array.isArray(values)) {
        return { found: false, index: -1, iterations: 0 };
    }

    let low = 0;
    let high = values.length - 1;
    let iterations = 0;

    while (low <= high) {
        iterations++;
        const mid = Math.floor((low + high) / 2);
        const v = values[mid];

        if (v === searchFor) {
            return { found: true, index: mid, iterations };
        }

        if (v < searchFor) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return { found: false, index: -1, iterations };
}