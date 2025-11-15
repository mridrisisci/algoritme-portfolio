import { StaticArray } from '../dsa_defender/staticarray.js';

class DynamicArray {
  constructor(initialCapacity = 10) {
    const cap = Math.max(1, Math.floor(initialCapacity) || 1);
    this._capacity = cap;
    this._buffer = new StaticArray(this._capacity);
    this._size = 0;
  }

  // Basic accessors
  size() {
    return this._size;
  }

  capacity() {
    return this._capacity;
  }

  // Grow the underlying storage. Public method exists but normally should not be called from outside.
  grow() {
    const newCapacity = this._capacity * 2;
    const newBuffer = new StaticArray(newCapacity);
    for (let i = 0; i < this._size; i++) {
      newBuffer.set(i, this._buffer.get(i));
    }
    this._buffer = newBuffer;
    this._capacity = newCapacity;
  }

  add(item) {
    if (this._size >= this._capacity) {
      this.grow();
    }
    this._buffer.set(this._size, item);
    this._size++;
  }

  get(index) {
    if (index < 0 || index >= this._capacity) {
      throw new RangeError('Index out of bounds');
    }
    if (index >= this._size) {
      throw new RangeError('Index out of bounds');
    }
    return this._buffer.get(index);
  }

  set(index, item) {
    if (index < 0 || index >= this._capacity) {
      throw new RangeError('Index out of bounds');
    }
    if (index >= this._size) {
      throw new RangeError('Index out of bounds');
    }
    this._buffer.set(index, item);
  }

  insert(index, item) {
    if (index < 0 || index > this._capacity) {
      throw new RangeError('Index out of bounds');
    }
    if (index > this._size) {
      throw new RangeError('Index out of bounds');
    }
    if (this._size >= this._capacity) {
      this.grow();
    }
    // shift right
    for (let i = this._size; i > index; i--) {
      const val = this._buffer.get(i - 1);
      this._buffer.set(i, val);
    }
    this._buffer.set(index, item);
    this._size++;
  }

  remove(index) {
    if (index < 0 || index >= this._capacity) {
      throw new RangeError('Index out of bounds');
    }
    if (index >= this._size) {
      throw new RangeError('Index out of bounds');
    }
    // shift left
    for (let i = index; i < this._size - 1; i++) {
      const val = this._buffer.get(i + 1);
      this._buffer.set(i, val);
    }
    // clear last slot
    this._buffer.set(this._size - 1, undefined);
    this._size--;
  }

  clear() {
    // Optionally clear values; we keep capacity but reset size
    for (let i = 0; i < this._size; i++) {
      this._buffer.set(i, undefined);
    }
    this._size = 0;
  }
}

export default DynamicArray;
export { DynamicArray };
