import { strict as assert } from 'assert';
import Queue from './queue.js';

describe('Queue', function () {
  let q;

  beforeEach(function () {
    q = new Queue();
  });

  it('is initially empty', function () {
    assert.equal(q.head, null);
    assert.equal(q.tail, null);
    assert.equal(q.size(), 0);
    // allow implementations to return null or undefined for empty peek/dequeue
    assert.ok(q.peek() == null);
    assert.ok(q.dequeue() == null);
  });

  it('enqueue sets head and tail for single element', function () {
    q.enqueue('A');
    assert.equal(q.size(), 1);
    assert.equal(q.peek(), 'A');
    assert.equal(q.get(0), 'A');
    assert.ok(q.head && q.head.data === 'A');
    assert.ok(q.tail && q.tail.data === 'A');
  });

  it('maintains FIFO order across multiple enqueues/dequeues', function () {
    q.enqueue('A');
    q.enqueue('B');
    q.enqueue('C');
    assert.equal(q.size(), 3);
    assert.equal(q.peek(), 'A');
    assert.equal(q.get(0), 'A');
    assert.equal(q.get(1), 'B');
    assert.equal(q.get(2), 'C');

    assert.equal(q.dequeue(), 'A');
    assert.equal(q.dequeue(), 'B');
    assert.equal(q.dequeue(), 'C');

    assert.equal(q.size(), 0);
    assert.equal(q.head, null);
    assert.equal(q.tail, null);
  });

  it('peek does not remove the element', function () {
    q.enqueue('X');
    const p = q.peek();
    assert.equal(p, 'X');
    assert.equal(q.size(), 1);
  });

  it('get() returns nullish for out-of-bounds indices', function () {
    q.enqueue('A');
    assert.ok(q.get(-1) == null);
    assert.ok(q.get(1) == null);
  });

  it('dequeue on empty queue is safe (no throw) and returns nullish', function () {
    assert.doesNotThrow(() => q.dequeue());
    assert.ok(q.dequeue() == null);
  });
});