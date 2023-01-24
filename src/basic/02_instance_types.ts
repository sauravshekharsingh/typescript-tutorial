// JavaScript despite being functional programming language
// supports classes and there are a number of built in classes for JavaScript runtimes out there

let regexp: RegExp = RegExp("ab+c");

let arr: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

// A first-in-first-out collection
class Queue<T> {
  private data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

export {};
