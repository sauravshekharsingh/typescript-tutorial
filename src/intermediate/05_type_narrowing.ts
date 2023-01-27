function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(value + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected number or string, got '${padding}'`);
}

// For anything else other than primitive types JS returns the string 'string'
// as a value of typeof of that variable and cannot be used to distinguish
// between the members

/* --------------------------------- Example -------------------------------- */
class Cat {
  meow() {
    console.log("meow");
  }
}

class Dog {
  bark() {
    console.log("woof");
  }
}

type Animal = Cat | Dog;

function speak(animal: Animal) {
  // Problem
  // typeof new Cat() === 'object'
  // typeof new Dog() === 'object'

  // Solution
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

/* ------------------ What about the objects not created by ----------------- */
/* ---------------- calling constructor of a praticular class --------------- */
type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  // Cannot use instance of because the objects
  // are not created by class constructor

  if ("size" in shape) {
    // TS infers that shape must be a 'Square'
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    // TS infers that shape must be a 'Rectangle'
    return shape.width * shape.height;
  }
}

area({ size: 2 }); // 6
area({ width: 2, height: 3 }); // 6

export {};
