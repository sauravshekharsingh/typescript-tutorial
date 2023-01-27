class Person {
  private _age: number;

  constructor(_age: number) {
    this._age = _age;
  }

  growOld() {
    this._age++;
  }

  age() {
    return this._age;
  }
}

const person = new Person(0);
person.growOld();
console.log("Age:", person.age());

// There are two ways to think about the 'this' keyword in JavaScript
// 1. Calling context 2. Lexically scoped
// Other than arrow and bound functions 'this' is driven by the calling context
// For line 9 'this' is the person instance from line 17

// Functions is JS are first class and they can be stored in variables
const growOld = person.growOld;
growOld();

// growOld is not called on any object and hence 'this' is undefined
// within the function body
// FIX: Use arrow functions for lexically scoping 'this'

// class Person {
//   private _age: number;

//   constructor(_age: number) {
//     this._age = _age;
//   }

//   growOld = () => {
//     this._age++;
//   }

//   age() {
//     return this._age;
//   }
// }

export {};
