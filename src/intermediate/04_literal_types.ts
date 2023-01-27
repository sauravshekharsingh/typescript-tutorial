let direction: string;

direction = "North";
direction = "n0r7h"; // We want this assignment to not be allowed and only correct spelling be allowed

/* ------------------------------ Literal type ------------------------------ */

let direction2: "North";
direction2 = "North";
// direction2 = "n0r7h"; // Error

/* ------------------------------- With union ------------------------------- */

let direction3: "North" | "South" | "East" | "West";
// direction3 = "west"; // Error

/* ------------------------------- Type alias ------------------------------- */

type CardinalDirection = "North" | "South" | "East" | "West";

let direction4: CardinalDirection;
// direction4 = "n0r7h"; // Error

/* ------------------------------ With numbers ------------------------------ */

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
  // Inform TS that return type is 'DiceValue'
}

// if (rollDice === 7) {
//   throw new Error("Not possible");
// }
// TS compile time error on line 34

export {};
