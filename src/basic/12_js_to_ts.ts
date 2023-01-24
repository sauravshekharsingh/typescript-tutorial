let someVariable: unknown;

// someVariable = loadString();
// console.log(someVariable.trim());

// someVariable = loadNumber();
// console.log(someVariable.toFixed());

// Code can throw errors on the runtime if 'any' is used for 'someVariable'
// Hence it is safe to use 'unknown'
// And write code with typecheck

// someVariable = loadString();
if (typeof someVariable === "string") {
  console.log(someVariable.trim());
}

// someVariable = loadNumber();
if (typeof someVariable === "number") {
  console.log(someVariable.toFixed());
}

export {};
