let dice: number;
function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();
// console.log('Current Dice Value', dice);
// Gives error, can be handled by '!'
console.log("Current Dice Value", dice!);

rollDice();
// console.log("Current Dice Value", dice);
// TypeScript again throws warning here
// As it has not been initialized directly

// Alternative FIX
// let dice!: number;
// Compile time only, upon developer to ensure correctness

// -------------------------------- Example 2 --------------------------------

class Point {
  // Error: Property 'x' has no initializer and is not definitely assigned in the constructor.
  // Solution: Add an assertion symbol '!'
  x!: number;
  y!: number;
  constructor() {
    this.moveRandom();
  }
  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
