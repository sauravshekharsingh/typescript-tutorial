// A FIFO collection
// class Queue {
//   data = [];
//   push(item) {
//     this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// }

// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }
//   pop(): number {
//     return super.pop();
//   }
// }

// const queue = new Queue();
// const NumberQueue = new NumberQueue();
// queue.push(123);
// queue.push("helloworld");

// console.log(queue.pop().toPrecision(1));
// console.log(queue.pop().toPrecision(1)); // Runtime error

// IMPORTANT: Creating these class annotations can quickly become cumbersome

// A generic class
class Queue<T> {
  private data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(123);
// queue.push("hello"); // Error

export {};
