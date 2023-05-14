type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const isNumber = (value: unknown) =>
  typeof value === "number" ? "number" : "other";

const withNumber = isNumber(123);
const withOther = isNumber("hello");

// -------------------------------- Example 2 --------------------------------

export type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends symbol
  ? "symbol"
  : T extends bigint
  ? "bigint"
  : T extends Function
  ? "function"
  : // Added by us and not supported by JS out of the box
  T extends null
  ? "null"
  : "object";

function typeName<T>(t: T): TypeName<T> {
  if (t === null) return "null" as TypeName<T>;
  return typeof t as TypeName<T>;
}

const str = typeName("helloworld");
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol(""));
// const big = typeName(24n);
const func = typeName(function () {});
const obj = typeName(null);

console.log(typeof null); // Before: 'object'
console.log(typeof null); // After: 'null'
