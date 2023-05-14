const king = "elvis";
// king = "john";
// Error
const upperCased = king.toUpperCase();
// Strings are immutable
// king === 'elvis'

const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "beatboxing"],
};

// dave = {
//   name: "grohl",
//   role: "singer",
//   skills: [],
// };
// Error Cannot assign value to a const variable

dave.name = "grohl";
dave.role = "singer";
dave.skills.unshift("drumming");

const daveNew = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "beatboxing"],
} as const;
// Converts all members of an object to readonly
// numbers - readonly, arrays - readonly tuples

// daveNew.name = "grohl";
// daveNew.role = "singer";
// daveNew.skills.unshift("drumming");
// Errors are thrown now

// -------------------------------- Example 2 --------------------------------

// Also required when objects have literal members

function layout(settings: {
  align: "top" | "right" | "bottom" | "left";
  padding: number;
}) {
  console.log("Layout: ", settings);
}

const example = {
  align: "left",
  padding: 0,
};

// layout(example);
// Error: TypeScript assumes the 'align' value to be of type 'string'
// Solution

const example2 = {
  align: "left",
  padding: 0,
  // padding is made as a readonly
} as const;

// OR

const example3 = {
  align: "left" as const,
  padding: 0,
  // padding untouched
} as const;
