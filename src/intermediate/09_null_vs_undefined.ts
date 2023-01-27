console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)

console.log(undefined == null); // true
// We can use == null to check if a value is null or undefined

// Not other values can leak through
console.log(false == null); // false
console.log(0 == null); // false
console.log("" == null); // false

const result = undefined;
// const result = someBooleanOrNullOrUndefined();
if (result == null) {
  console.log("Null or undefined", result); // 'null' / 'undefined'
}
if (result != null) {
  console.log("Boolean", result);
}

function decorate(value: string | null | undefined) {
  // return `-- ${value.trim()} -- `; // Error that the value can be 'null' or 'undefined'

  // FIX
  if (value == null) {
    return value;
  }
  return `-- ${value.trim()} -- `;
}

export {};
