type Animal = {
  name: string;
  voice(): string;
};

function log(animal: Animal) {
  console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

// Want to extend the type declaration to create different
// types of animals variables

// We want to be able to use these utility functions on the instances
// of 'Cat' and 'Dog'. TS can ensure that 'Cat' and 'Dog' implement
// all features required by an Animal using 'implements' keyword

class Cat implements Animal {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}

class Dog implements Animal {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}

log(new Cat("CatA"));
log(new Dog("DogA"));
