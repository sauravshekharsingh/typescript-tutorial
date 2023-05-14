export type Point = {
  x: number;
  y: number;
  z: number;
};

type ReadOnlyPoint = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
};

const center: ReadOnlyPoint = {
  x: 0,
  y: 0,
  z: 0,
};

type ReadOnlyPointNew = {
  // readonly [Item in "x" | "y" | "z"]: number;
  // readonly [Item in keyof Point]: number;
  readonly [Item in keyof Point]: Point[Item];
};

type ReadOnlyPointNewT<T> = {
  readonly [Item in keyof T]: T[Item];
};

// This is already built in TS
const centerNew: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

// center.x = 100; // Error
