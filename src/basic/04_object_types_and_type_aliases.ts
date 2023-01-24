// center is a variable that must be always assigned an object
// where the first value is x: a number and second value y: a number

// let center: { x: number; y: number } = {
//   x: 0,
//   y: 0,
// };

// let unit: { x: number; y: number } = {
//   x: 1,
//   y: 1,
// };

// To prevent writing '{ x: number; y: number }' again and again we have type aliases
type Point = { x: number; y: number };

let center: Point = {
  x: 0,
  y: 0,
};

let unit: Point = {
  x: 1,
  y: 1,
};

export {};
