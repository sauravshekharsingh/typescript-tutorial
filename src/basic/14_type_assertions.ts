// let hello = load();
let hello: unknown;

if (typeof hello === "string") {
  const trimmed = hello.trim();
}

// Might not want to do this because of performance reasons
// or save some time during development

let trimmed = (hello as string).trim();

// Tells TS that the user is sure that the 'hello' variable
// will be a string

// Also can be written as

trimmed = (<string>hello).trim();

export {};
