let newAny: any;
let newUnknown: unknown;

// Any and unknown types can take values of any datatype
newAny = 123;
newAny = "helloworld";

newUnknown = 123;
newUnknown = "helloworld";

let newBool: boolean = newAny;
// Allows assigning to boolean variable from any
// Allows to bypass the TS system

// newAny.trim(); // No error

// IMP: Unknown is different and safer
// Can still accept anything in unknowns
// But cannot use in an unsafe manner
// newUnknown.trim(); // Error: cannot use any method

// Have to write something like this
if (typeof newUnknown === "string") {
  newUnknown.trim();
} else if (typeof newUnknown === "boolean") {
  newUnknown.valueOf;
}

export {};
