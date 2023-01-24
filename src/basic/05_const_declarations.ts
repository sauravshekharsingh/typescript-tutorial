type Point = { x: number; y: number };

const point: Point = { x: 0, y: 0 };

// const point: Point = { xx: 0, y: 0 }; // Error: due to xx

// point = { x: 1, y: 1 }; // Error: point is a const

// All other behaviours are the same as let
point.x = 123;
point.y = 456;

export {};
