const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.counter = 0;
  }

  get size() {
    return this.counter;
  }

  enqueue(element) {
    if (this.counter === 0) {
      this.value = new ListNode(element);
    }
    if (this.counter !== 0) {
      let currentElNode = this.value;
      while (currentElNode.next !== null) {
        currentElNode = this.value.next;
      }
      currentElNode.next = new ListNode(element);
    }
    this.counter++;
  }

  dequeue() {
    const firstElNode = this.value.value;
    this.value = this.value.next;
    this.counter--;
    return firstElNode;
  }
}

module.exports = Queue;
