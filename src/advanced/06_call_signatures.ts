// With type
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName?: string;
};

// With interface
// interface Add {
//   (a: number, b: number): number;
// }

const add: Add = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};
add.debugName = "Addition function";

// -------------------------------- Example 2 --------------------------------

// Type annotation can be used for function invoked with 'new' operator

// Method 1
type PointCreator = new (x: number, y: number) => { x: number; y: number };

class Point {
  constructor(public x: number, public y: number) {}
}

// Method 2
const Point2: PointCreator = class {
  constructor(public x: number, public y: number) {}
};

// Another way to define the 'type' annotation
type PointCreator2 = {
  new (x: number, y: number): { x: number; y: number };
  new (x: number, y: number, z: number): { x: number; y: number; z: number };
  (x: number, y: number): { x: number; y: number };
  (x: number, y: number, z: number): { x: number; y: number; z: number };
  debugName: string;
};

export {};
