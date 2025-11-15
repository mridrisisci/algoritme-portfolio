export default class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Debug helper
  printList() {
    let out = [];
    let node = this.head;
    while (node) {
      out.push(`{ data: ${JSON.stringify(node.data)}, next: ${node.next ? 'Node' : 'null'} }`);
      node = node.next;
    }
    console.log(out.join(' -> '));
  }

  // Data-facing methods
  add(data) {
    const node = { next: null, data };
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) cur = cur.next;
      cur.next = node;
    }
    return node;
  }

  get(index) {
    const node = this.getNode(index);
    return node ? node.data : undefined;
  }

  getFirst() {
    return this.head ? this.head.data : undefined;
  }

  getLast() {
    const last = this.getLastNode();
    return last ? last.data : undefined;
  }

  set(index, data) {
    const node = this.getNode(index);
    if (!node) throw new RangeError('Index out of bounds');
    node.data = data;
  }

  insert(index, data) {
    if (index < 0) throw new RangeError('Index out of bounds');
    const node = { next: null, data };
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return node;
    }
    const prev = this.getNode(index - 1);
    if (!prev && index !== 0) {
      // allow insert at end if index == size
      if (index === this.size()) {
        return this.add(data);
      }
      throw new RangeError('Index out of bounds');
    }
    node.next = prev.next;
    prev.next = node;
    return node;
  }

  remove(index) {
    if (!this.head) return undefined;
    if (index < 0) throw new RangeError('Index out of bounds');
    if (index === 0) return this.removeFirst();
    const prev = this.getNode(index - 1);
    if (!prev || !prev.next) throw new RangeError('Index out of bounds');
    const removed = prev.next;
    prev.next = removed.next;
    return removed.data;
  }

  removeFirst() {
    if (!this.head) return undefined;
    const removed = this.head;
    this.head = this.head.next;
    return removed.data;
  }

  removeLast() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      const data = this.head.data;
      this.head = null;
      return data;
    }
    let prev = null;
    let cur = this.head;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
    return cur.data;
  }

  size() {
    let count = 0;
    let cur = this.head;
    while (cur) {
      count++;
      cur = cur.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  // Node-exposing methods
  getNode(index) {
    if (index < 0) return null;
    let cur = this.head;
    let i = 0;
    while (cur && i < index) {
      cur = cur.next;
      i++;
    }
    return cur || null;
  }

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    if (!this.head) return null;
    let cur = this.head;
    while (cur.next) cur = cur.next;
    return cur;
  }

  getNextNode(node) {
    if (!node) return null;
    return node.next || null;
  }

  getPreviousNode(node) {
    if (!this.head || !node) return null;
    if (this.head === node) return null;
    let cur = this.head;
    while (cur && cur.next !== node) {
      cur = cur.next;
    }
    return cur || null;
  }

  insertBefore(node, data) {
    if (!node) throw new RangeError('Node not found');
    if (this.head === node) {
      const newNode = { next: this.head, data };
      this.head = newNode;
      return newNode;
    }
    const prev = this.getPreviousNode(node);
    if (!prev) throw new RangeError('Node not found');
    const newNode = { next: node, data };
    prev.next = newNode;
    return newNode;
  }

  insertAfter(node, data) {
    if (!node) throw new RangeError('Node not found');
    const newNode = { next: node.next, data };
    node.next = newNode;
    return newNode;
  }

  removeNode(node) {
    if (!node) return undefined;
    if (this.head === node) {
      this.head = this.head.next;
      return node.data;
    }
    const prev = this.getPreviousNode(node);
    if (!prev) throw new RangeError('Node not found');
    prev.next = node.next;
    return node.data;
  }
}
