export class StaticArray {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 0) {
      throw new RangeError('capacity must be a non-negative integer');
    }
    this._capacity = capacity;
    this._data = new Array(capacity);
  }

  get length() {
    return this._capacity;
  }

  get(index) {
    if (index < 0 || index >= this._capacity) {
      throw new RangeError('Index out of bounds');
    }
    return this._data[index];
  }

  set(index, value) {
    if (index < 0 || index >= this._capacity) {
      throw new RangeError('Index out of bounds');
    }
    this._data[index] = value;
  }
}
