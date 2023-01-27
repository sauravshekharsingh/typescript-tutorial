class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("John", 10);
console.log(person.name, person.age);

/* --------------------------------- Problem -------------------------------- */

// Duplication of properties definition as data members
// as well as in constructor

/* -------------------------------- Solution -------------------------------- */

class Person2 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

export {};
