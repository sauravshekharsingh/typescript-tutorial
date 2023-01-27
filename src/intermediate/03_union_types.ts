/* -------------------------------- Example 1 ------------------------------- */
/**
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */
function formatCommandLine(input: any) {
  let line = "";

  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x: any) => x.trim()).join(" ");
  }

  return line;
}

console.log(formatCommandLine("hello"));
console.log(formatCommandLine(["hello", " world"]));
// This works but 'any' in fn params can cause type errors
// console.log(formatCommandLine(1337)); // Error runtime by JavaScript

// FIX
/**
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */
function formatCommandLineNew(input: string | string[]) {
  let line = "";

  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x: any) => x.trim()).join(" ");
  }

  return line;
}

// console.log(formatCommandLineNew(1337)); // Error compile time by TypeScript

/* -------------------------------- Example 2 ------------------------------- */

type Padding = number | string;

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(value + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected number or string, got '${padding}'`);
}

padLeft("hello", 4);
padLeft("hello", "----");
// padLeft("hello", true); // No Error but Runtime Exception
// Can be caught by replacing 'any' with type 'Padding'
function padLeftType(value: string, padding: Padding) {}
// padLeftType("hello", true); // Caught at compile time

export {};
