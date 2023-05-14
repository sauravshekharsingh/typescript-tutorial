type Person = {
  name: string;
  dateOfBirth?: Date;
};

// function assert(condition: unknown, message: string) {
//   if (!condition) throw new Error(message);
// }

// Assertion fn
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new TypeError("value is not a Date");
}

// const maybePerson = loadPerson();
const maybePerson: unknown = {};

assert(maybePerson != null, "Could not load person");

// Error: Object is possibly 'null'
// TS does not do implicit assertion checking
// Supports explicit assertion checking in the form of assertion function
// console.log("Name:", maybePerson.name);
// assertDate(maybePerson.dateOfBirth);
// Error
// Solution: Add assertion condition to the fn
// console.log("DOB:", maybePerson.dateOfBirth.toISOString());

// Application Code: User Defined Type Guards
// Application Tests: Assertion Functions

export {};
