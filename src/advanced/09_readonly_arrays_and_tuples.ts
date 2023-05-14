function reverseSorted(input: number[]): number[] {
  return input.sort().reverse();
}

const start = [1, 2, 3, 5, 4];
const result = reverseSorted(start);

console.log(result); // [5, 4, 3, 2, 1]
console.log(start); // [5, 4, 3, 2, 1]
// Array mutated

// Solution
function reverseSortedNew(input: readonly number[]): number[] {
  // return input.sort().reverse();
  // Now, need to create a copy and then work on that
  return input.slice().sort().reverse();
}

const startNew = [1, 2, 3, 5, 4];
const resultNew = reverseSorted(start);

console.log(resultNew); // [5, 4, 3, 2, 1]
console.log(startNew); // [1, 2, 3, 5, 4]

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

// -------------------------------- Example 2 --------------------------------

type PointTuple = readonly [number, number];
