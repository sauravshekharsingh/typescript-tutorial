type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 0,
  y: 0,
};

// Variable assignment
// point = { x: 1, y: 1 }; // Error

// Property assignment
point.x = 1; // No error
point.y = 1; // No error

// FIX
type PointReadOnly = {
  readonly x: number;
  readonly y: number;
};
// Only for compile time error checking and has no runtime JavaScript support
// Now variable reassignment and property reassignment not allowed

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal("sheep");
console.log(sheep.name); // Readable
sheep.name = "wolf"; // Modifiable

// To disallow modification
class AnimalReadOnly {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const sheep2 = new AnimalReadOnly("sheep");
console.log(sheep2.name); // Readable
// sheep2.name = "wolf"; // Error: Only readable

export {};
