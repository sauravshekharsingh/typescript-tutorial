// function log(value: any) {
//   console.log(value.toFixed(2));
// }

// Can throw errors if strings are passed
// Hence 'unknown' should be used as parameters

console.log(123.456);
// console.log("helloworld"); // Error

// FIX
function log(value: unknown) {
  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return value;
}

export {};
