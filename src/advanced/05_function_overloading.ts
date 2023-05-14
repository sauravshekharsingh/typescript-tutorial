function reverse(string: string): string;
function reverse(string: string[]): string[];
// These declarations narrow down the return type
// This is compile time only and not a part of JS
// Hence we are only allowed to have one body of the
// fn that has to handle all the overload cases

function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray === "string") {
    return stringOrStringArray.split("").reverse().join("");
  } else {
    return stringOrStringArray.slice().reverse();
  }
}

// TS thinks the output variable can be string | string[]
// because of the return type of the variable
const hello = reverse("hello");
const hello_array = reverse(["h", "e", "l", "l", "o"]);

// -------------------------------- Example 2 --------------------------------

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const day = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch = makeDate(0); // 1 Jan 1970

// const invalid = makeDate(2000, 1);
// Error is ignored should have thrown error
// Solution: Need to add signatures
// Then it throws error since there are only two ways of invoking the function
