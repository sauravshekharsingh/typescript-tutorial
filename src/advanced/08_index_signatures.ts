const strs = {
  hello: "world",
};

console.log(strs["hello"]);
// "world"

const nums = {
  1337: "leet",
};

console.log(nums[1337]);
// "leet"

// The keys can only be 'string' for the instances of Dictionary class
// And the values will be boolean only
type Dictionary = {
  [key: string]: boolean;
};

// -------------------------------- Example 2 --------------------------------

type Person = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [username: string]: Person;
};

const persons: PersonDictionary = {
  jane: { displayName: "Jane Doe", email: "jane@example.com" },
};

persons["john"] = { displayName: "John Doe", email: "john@example.com" };

console.log(persons["john"]);

delete persons["john"];

// PersonDictionary must always have a key named 'jane'
type PersonDictionary2 = {
  [username: string]: Person;
  jane: Person;
};

const result = persons["missing"];
console.log(result, result.email);
// Undefined, error
// TypeScript not showing any errors

// Solution
type PersonDictionary3 = {
  [username: string]: Person | undefined;
};

export {};
