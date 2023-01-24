// --- Functions ---

function add(a: number, b: number): number {
  return a + b;
}

// No return variable
function log(message: string): void {
  console.log("LOG: ", message);
}

function addAnother(...values: number[]) {
  return values.reduce((prev, curr) => {
    return prev + curr;
  });
}

addAnother(1, 2);
addAnother(1, 2, 3);

// --- First class functions ---

// const sum: (a: number, b: number) => number;
// or

type Sum = (a: number, b: number) => number;
let sum: Sum;

sum = function (a: number, b: number): number {
  return a + b;
};

export {};
