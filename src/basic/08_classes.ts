class Animal {
  // By default all members are public
  // private: Outside class body access not allowed
  // protected: Makes variables available within the class hierarchy and not instances
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMetres: number): void {
    console.log(`${this.name} moved ${distanceInMetres}m.`);
  }
}

let cat = new Animal("Cat");
cat.move(10);
// cat.name; // Error

class Bird extends Animal {
  public fly(distanceInMetres: number): void {
    // Name is protected in the animal class but can be solved using protected
    console.log(`${this.name} flew ${distanceInMetres}m.`);
  }
}
